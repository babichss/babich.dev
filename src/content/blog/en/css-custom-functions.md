---
title: "Custom CSS Functions"
description: "Custom CSS functions are almost around the corner, so it is time to take a closer look at them."
publishDate: 2026-06-15 10:24
urlSlug: "css-custom-functions"
lang: "en"
---

Custom CSS functions are almost around the corner, so it is time to take a closer look at them.

Modern CSS lets us solve increasingly complex tasks, partly thanks to the reactive behavior built into CSS variables, or CSS custom properties, and a wide range of native CSS functions like `clamp()`, `color-mix()`, and others. Today we can write fairly clever expressions like this:

```css
clamp(var(--min), 2vw + 1rem, var(--max));
```

But reusing those expressions is still a pain. We have to rewrite the same logic everywhere we need it, which is not exactly convenient. There is hope, though: the CSS Functions and Mixins Module Level 1 specification has been in progress for quite a while, even if it is still a Working Draft.

This document introduces CSS custom functions, whose whole purpose is to let us create our own functions and reuse complex mathematical formulas. And in CSS those formulas can be genuinely complex, if only because of the syntax. But that is the world we live in.

They look roughly like this:

```css
@function --fluid-size(--min, --max) {
  result: clamp(var(--min), 2vw + 1rem, var(--max));
}

font-size: --fluid-size(1rem, 3rem);
```

The syntax is straightforward:

- Declare the function with the `@function` at-rule;
- The name has a `--` prefix, just like the rest of the CSS custom property syntax;
- A function can accept parameters;
- Parameters can have default values: `--fn(--x: 1px) {...}`;
- Parameters can be typed: `--fn(--clr <color>) {...}`;
- A parameter can be a list: `--fn(--list <length>#)`, `width: --fn({1px, 7px, 2px})` (yes, with curly braces);
- The `result` keyword is basically the equivalent of our beloved `return`;

You can even write fairly complex logic, at least by CSS standards. For example, you can create intermediate variables with their own calculations, or just use them as constants:

```css
@function --fluid-size(--min: 1rem, --max: 3rem) {
  --preferred: calc(2vw + 1rem);
  --safe-min: max(var(--min), 0.875rem);

  result: clamp(var(--safe-min), var(--preferred), var(--max));
}
```

Even better, custom functions support media queries:

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

and the conditional `if()` function, which deserves a separate look.

What about support? Well, it is still a little sad. Chromium has shipped an implementation of the current custom functions draft, which means we can try this syntax in Chrome, Edge, and the rest of the Chromium family.

Firefox, as usual, will probably not rush to implement it until the standard reaches a more stable stage. As for Safari, the only thing we can be sure about is that we cannot be sure about Safari.

I am genuinely looking forward to CSS custom functions becoming part of Baseline, because this is a genuinely convenient feature. By the way, the draft for CSS mixins goes hand in hand with them, and I am waiting for those too. We will talk about mixins later, once at least Chromium gets around to them, but I hope the wait will not be too long.

Why am I so impatient for these specifications to become Baseline? Because it would mark the beginning of the end for SCSS and all those other LESS-like things, toward which I feel an entirely unreasonable and burning hostility. If this post gets at least 100 reactions, I will explain why. If it does not, I will not.

***

Further reading:

[MDN: @function CSS at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40function)

[MDN: Using CSS custom functions](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)

Further reading for specification enjoyers:

[W3C: CSS Functions and Mixins Module](https://www.w3.org/TR/css-mixins-1)
