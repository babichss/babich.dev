---
title: "What Does Deprecated Mean in HTML?"
description: "The web does not stand still, which means parts of the standard are inevitably replaced by others and gradually fall out of use."
publishDate: 2025-01-15 12:01
urlSlug: "what-is-deprecation-in-html"
lang: "en"
---

The web does not stand still, which means parts of the standard are inevitably replaced by others and gradually fall out of use. This process often passes through a stage known as deprecation, when using a feature is not forbidden, but is no longer encouraged either.

It is important to distinguish between deprecated, obsolete, and removed. For example, tags such as `<font>`, `<center>`, or `<menuitem>` are _deprecated_. They may still be partially supported by some browsers for backward compatibility. The use of such tags lost its purpose once CSS appeared, but in most cases their use is not severely harmful.

But tags such as `<keygen>` or `<applet>` have been removed from the specification entirely, and browsers do not support their functionality, even for backward compatibility, because that support would call the security of the page into question.

In short, the life cycle of an HTML tag looks roughly like this: Proposed -> Living Standard -> Deprecated -> Obsolete -> Removed. Its fate is decided by WHATWG together with W3C.

The reasons for deprecation can be roughly divided into a few informal groups:

Presentation versus semantics.
HTML has moved from describing how a page looks to describing what its parts mean. That is why some tags become deprecated when their role is now handled by CSS. Examples include `<font>`, `<center>`, `<marquee>`, and others.

Security and maintenance.
Some tags were intended to extend page functionality and make it possible to describe that functionality declaratively. But what looked great on paper sometimes turned into a real maintenance nightmare in practice. Sometimes it also became a serious security hole, like the same `<keygen>`. It was meant to create a public-private key pair in the browser and send the public key when a form was submitted. What could possibly go wrong? In practice, many questions appeared: different browsers could generate keys with different levels of reliability, malicious code could quietly insert its own `<keygen>` into the page, the mechanism was opaque, there was no API for managing keys, and so on.

Better alternatives.
Sometimes the purpose of an old tag became part of a broader new specification, as with `acronym`, which is recommended to be replaced with `abbr`.

Why is it important to follow specification recommendations? I know browsers render our pages whether or not they follow the latest standards, and whether or not you have poured three buckets of div soup into them. But we should not forget assistive technologies, SEO, and the general predictability of markup. If you suddenly decide to use `<center>` to mark up some central section, nobody can guarantee that every browser has removed its backward-compatible behavior and that one of them will not suddenly start centering text.

It can also turn into "quiet" technical debt, because who pays attention to some HTML anyway? But it can drag the same kind of "quiet" bugs along with it: elements may render differently, and browsers may even enable quirks mode, which can break even more.

Obviously, following specification recommendations lets you make your markup more resilient to future changes without constantly looking back at mistakes from the past.

The web is always moving and constantly evolving, HTML included, even though many of us ignore its existence. That is why it is important to pay attention to this evolution, so you do not one day end up on the shoulder of the road in a validation ditch.
