---
title: "How Browsers Forgive HTML Errors"
description: "Browsers forgive a lot of mistakes in your HTML document because the web has to work even when the document is not written the way the parser expects."
publishDate: 2026-06-18 09:30
urlSlug: "html-error-recovery"
lang: "en"
---

Browsers forgive a lot of mistakes in your HTML document.

This is primarily because of backward compatibility: the web has to work even if your document is ancient legacy code. To make that happen, the browser has to "fill in" elements so it can build a valid DOM tree from what you sent it.

There are many rules for this kind of tolerance, so I will not try to cover all of them. Instead, let us look at the main principles behind this "unbreakability."

You can write nothing but this in an `.html` file:

```html
Hello, world!
```

and the browser will turn it into:

```text
#el(html)
  #el(head)
  #el(body)
    #text("Hello, world!")
```

Because a DOM tree must have a root element, a `head`, and a `body`. It is easier for the browser to insert them itself than to collapse dramatically during parsing.

An important detail: the browser does not change your `.html` file itself. It uses it as the basis for building the DOM, and the rendered document in the browser window is produced from that DOM.

So, the browser has many rules for processing your `html`, and a significant number of them handle these kinds of "implicit" transformations.

For example, optional closing tags. In some cases you can omit them because of how certain elements interact with each other. Take this example:

<!-- prettier-ignore -->
```html
<p>Hello
<p>World
```

The browser will explicitly turn this into two paragraphs:

```text
#el(p)
  #text("Hello")
#el(p)
  #text("World")
```

Why? Because a paragraph cannot contain block elements inside it. So when the parser sees an opening tag for a block element after an open `p`, it concludes that the previous element has ended and should be closed. By the way, it will apply the same fix if you decide to put a `div` inside a `p`:

<!-- prettier-ignore -->
```html
<p>
<div></div>
</p>
```

This turns into:

```text
#el(p)
#el(div)
#el(p)
```

The browser's "thought process" is roughly: _"Okay, here is a paragraph, what is next? Oh, a div, so the p needs to close. Okay, the div is done, what is next? A closing p? What is it closing? That is not right. Everything was already closed, so here is another paragraph. Empty."_

By the way, the browser does not automatically turn plain text into a paragraph. It creates a text node, which is a perfectly valid participant in the DOM.

And yes, the browser does not guess what you meant. It has very specific rules and recovery mechanisms that it follows to build a DOM it can render somehow.

If the markup is incomplete, contradictory, or simply written in a way the parser does not expect, the browser does not stop. It tries to assemble a valid internal document structure from it. Sometimes it implicitly creates missing elements, sometimes it closes elements that were opened earlier, sometimes it moves nodes somewhere else, and sometimes it ignores things it cannot fit into the tree properly.

So remember: if something exists in the `html` but is missing from the DOM, or appears in the wrong place, there is a probability approaching 100% that your restless hands caused it, not a browser bug.

There is nothing mystical or unpredictable about this. All anomalies in the DOM appear according to the browser's internal rules.

By the way, it was not always like this. At one point there was an attempt to introduce XHTML, a standard with very strict syntax where the browser would fail dramatically on parsing errors. For some reason, nobody liked that, and the standard did not catch on. Instead, we have HTML5, which understands friends and forgives enemies. In other words, your messy and incorrect HTML.

In short: the browser has a huge number of rules, tricks, exceptions, and algorithms to make your HTML document show up in the browser window somehow instead of crashing with an error. Because a page from 1991 still has to render in 2026, no matter what.

That is the web, carefully preserving its inheritance.
