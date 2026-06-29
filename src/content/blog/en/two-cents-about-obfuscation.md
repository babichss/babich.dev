---
title: "Two Words About Obfuscation"
description: "Obfuscation has a different goal: to make reverse engineering as difficult as possible and prevent people from understanding what is happening in your code."
publishDate: 2024-01-15 12:00
urlSlug: "two-cents-about-obfuscation"
lang: "en"
---

I see you really liked the word "obfuscation." Well then, it is worth telling you about it, and at the same time figuring out how it differs from minification.

Both approaches change your source code in some way, but they pursue different goals.

Minification compresses a file: it removes spaces, comments, line breaks, and reduces variable and function names to the minimum. The structure does not change. In JavaScript this is especially effective because formatting and indentation do not matter to it, apart from semicolons. If a variable or function is exported outside the module, its name remains unchanged to avoid confusion. As a result, the file becomes smaller and loads faster from the server, although this does not affect execution speed. It is like writing: "Hll,tmrwllbhrd.btwsllmng" - the meaning is the same, you just need to know how to read it.

Obfuscation has a different goal: to make reverse engineering as difficult as possible, meaning it is meant to prevent people from understanding what is happening in your code. This can be useful when you are writing some super-duper unique algorithm that people pay you for. Or a malicious script.

During obfuscation, the structure of the code changes significantly. Even a simple function becomes extremely tangled. Logic may be split into separate pieces scattered across the file, simple algorithms may be replaced with very exotic approaches, and very non-obvious language features are often used to finish breaking your brain. Pieces of "dead code" may also be added just to make a mess and throw you off.

It is like assembling a car from whatever junk is lying around: brooms instead of wheels, slippers instead of headlights, a drawer instead of a steering wheel, and yet somehow it drives.

For example, a trivial `Hello, world!`

```js
function hi() {
  console.log("Hello World!");
}
hi();
```

can turn into this thing:

```js
function _0x2925(_0x542d0a, _0x2c3c78) {
  var _0xa1e55d = _0xa1e5();
  return (
    (_0x2925 = function (_0x292568, _0x3c856f) {
      _0x292568 = _0x292568 - 0x1ac;
      var _0x3c7a1b = _0xa1e55d[_0x292568];
      return _0x3c7a1b;
    }),
    _0x2925(_0x542d0a, _0x2c3c78)
  );
}
(function (_0x4d614b, _0x34a9e8) {
  var _0x209520 = _0x2925,
    _0x55e423 = _0x4d614b();
  while (!![]) {
    try {
      var _0x1f7119 =
        -parseInt(_0x209520(0x1b6)) / 0x1 +
        (-parseInt(_0x209520(0x1af)) / 0x2) *
          (-parseInt(_0x209520(0x1b2)) / 0x3) +
        -parseInt(_0x209520(0x1b1)) / 0x4 +
        parseInt(_0x209520(0x1ad)) / 0x5 +
        (parseInt(_0x209520(0x1b7)) / 0x6) *
          (-parseInt(_0x209520(0x1ac)) / 0x7) +
        (parseInt(_0x209520(0x1ae)) / 0x8) *
          (parseInt(_0x209520(0x1b5)) / 0x9) +
        parseInt(_0x209520(0x1b0)) / 0xa;
      if (_0x1f7119 === _0x34a9e8) break;
      else _0x55e423["push"](_0x55e423["shift"]());
    } catch (_0x259b9c) {
      _0x55e423["push"](_0x55e423["shift"]());
    }
  }
})(_0xa1e5, 0xdb2b8);
function _0xa1e5() {
  var _0x135cc9 = [
    "1630085KNrFJy",
    "5633484gfXmBA",
    "7uZhyxi",
    "8869945iTvxpi",
    "661592MxYeut",
    "314PMTrKl",
    "19727980eYXqzm",
    "5305732XTxbqH",
    "18414OMZNhs",
    "Hello\x20World!",
    "log",
    "9OSzIcJ",
  ];
  _0xa1e5 = function () {
    return _0x135cc9;
  };
  return _0xa1e5();
}
function hi() {
  var _0x3be6dc = _0x2925;
  console[_0x3be6dc(0x1b4)](_0x3be6dc(0x1b3));
}
hi();
```

Of course, with the arrival of AI, deobfuscation can become much easier. For example, ordinary ChatGPT analyzed the snippet above rather quickly, though that is not surprising because I used fairly simple settings to distort the code. But it also handled a much more complex example incomparably faster than a human would. That means only one thing: obfuscation algorithms will become even more tangled and complex.

To sum up: minification reduces the physical size of your file, while obfuscation distorts your code beyond recognition to hide its true purpose. And of course, these techniques can be used together.

So the next time you meet a monster in the code with dozens of `_0x123abc` names, do not rush to call an exorcist. Maybe it is just "Hello world" dressed up in a penguin costume and trying to steal your passwords.
