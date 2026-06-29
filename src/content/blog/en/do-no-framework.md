---
title: "Try Building Something Without a Framework"
description: "Framework-brain is a special way of thinking where even hover is implemented through setState. And yes, I did not invent that example. I have seen code like that in production."
publishDate: 2026-06-02 12:01
urlSlug: "do-no-framework"
lang: "en"
---

Framework-brain is a special way of thinking where even hover is implemented through setState. And yes, I did not invent that example. I have seen code like that in production.

I still do not know what to call the opposite way of thinking. The idea is that instead of building absolutely everything in, say, React, you first stop and think: "Maybe HTML/CSS/JS can already do this?"

Look, lately I have been running around with `dialog`, `popover`, `@layout`, `@scope`, and various Browser API tricks, and I even managed to build a fully working application purely with native platform features. While building that alpha version, I kept catching myself thinking that we still make a huge number of things as complicated as possible. Purely out of habit.

At some point I sat down and started estimating what could theoretically be thrown away or done differently in almost any component library. The first things that come to mind are tooltips, tabs, closeable dropdowns, and similar small interface details. They can be built very nicely with native elements.

And where native elements are not enough, there are Custom Elements. While preparing for my talk at fwdays, I realized an interesting thing: when people hear about native web components, they immediately think of the scary Shadow DOM, with all its isolation, encapsulation, templates, and other horrors. Some people are simply afraid of classes. But anyway.

The point is that we do not have to use Shadow DOM and suffer through style isolation. Custom Elements work perfectly well in the so-called Light DOM, an unofficial name for when they act as a wrapper around an open fragment of the tree.

So, Custom Elements turned out to be very convenient for small "dumb" components whose job is some simple behavior, such as switching the active element inside depending on an attribute value. Or the same collapse/expand behavior, but controlled from outside. I even have a tiny component that simply shows the current slide as "7/8" by joining two values together.

What is the benefit, in my opinion? First, Custom Elements are supported by basically every browser worth caring about today. Second, compatibility. Your framework will fail to render a Custom Element in only one case: if it cannot render any other tag either. Third, you reduce dependence on the internal details of your stack, because custom elements depend only on web standards and browsers. Fourth, if you roll up your sleeves and move all the basic, simple solutions from the framework to Custom Elements, you can meaningfully reduce the final bundle size.

In general, the idea of this post is to practice a three-level decision-making system whenever you create a new component:

1. _Can HTML/CSS/JS already do this?_

   You may be pleasantly surprised by how much the platform can do today. I still make pleasant discoveries myself from time to time, honestly. In general, if you need something simple, first check whether the browser already has it.

2. _Do I need my framework for this?_

   The native platform can already do a lot, but it still gives us Lego bricks rather than ready-made solutions. Often, the solution has to be assembled by hand. But there is room to maneuver here too: many solutions can be composed without adding extra complexity. Custom Elements are exactly the layer that lets you assemble a piece of behavior while giving you reactivity, DOM tools, events, commands, and a bunch of other things out of the box.

3. _Can I avoid building all of it with the framework?_

   This is more of a decomposition task. Often, a new component really may look complex, dependent on global state, tied to other components, and so on. But if you take a breath and look at it from the side, you may see that one big scary task breaks down into a handful of small, non-scary ones. Then you can calmly return to question number one.

I would suggest trying to think of your framework as an orchestrator responsible for complex composite tasks, while handing simple things over to the browser and your knowledge of the platform.

If I had to compress all of this into one aphorism: do not weed flowerpots with combine harvesters.

@babichdev
