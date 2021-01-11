---
title: insertAdjacentHTML >>>> innerHTML
date: '2021-01-10T12:00:00.00Z'
description: '<element>.insertAdjacentHTML() is objectively superior, period.'
---

If you wanted to nest a div inside another using JS, you might perhaps do this:

```js
div1 = document.createElement(“div”)
div1.id = "div1"
div2 = document.createElement(“div”)
div2.id = "div2"
div2.onclick = console.log
div1.innerHTML = `
  ${div2.outerHTML}
  <p>End of div1</p>
`
```

The seasoned developer will see the flaw here immediately. I didn't. If you try `div1.querySelector("#div2").click()` now, you'll find that `div2` has no `onclick` handler any more!! Turns out the `onclick` is not kept when you do `div2.outerHTML` because onclick is not set as an attribute on `div2`. Fair enough, pretty obvious in retrospect.

So then one might try the straightforward `appendChild()`:

```js
div1 = document.createElement(“div”)
div2 = document.createElement(“div”)
div2.onclick = console.log
div1.appendChild(div2)
div1.innerHTML += "<p>End of div1</p>"
```

Amazingly, this doesn't keep the `onclick` either, and what's perhaps even more incredible is that if we remove the last line where we add to `div1`'s `innerHTML`, everything works exactly as expected! Any time you do a **+= ** with `element.innerHTML`, it basically corrupts the DOM at that element's level and destroys all event handlers for all its children! Some details are here, although there is surprisingly very little documentation on this issue:  https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Replacing_the_contents_of_an_element .

The solutions then. One might be to do:

```js
div2.setAttribute("onclick", "console.log(this)")
div1.innerHTML = `
  ${div2.outerHTML}
  <p>End of div1</p>
`
```

This does work, but depending on how large your click handler is, it might be undesirable because we are basically polluting our HTML with the handler code. Next we could try the more verbose:

```js
div2.onclick = console.log
p = document.createElement("p")
p.innerText = "End of div1"
div1.appendChild(div2)
div1.appendChild(p)
```

This fixes it as well, and was the first thing I tried, but depending on how many such extra elements we have and how complex they are (number of attributes etc.), it might be tedious to do `createElement()` and `appendChild()` for all of them. 

So now we come to what is unquestionably the best solution to this issue. I introduce to you: [insertAdjacentHTML()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

```js
div2.onclick = console.log
div1.appendChild(div2)
div1.insertAdjacentHTML("beforeend", "<p>End of div1</p>")
```

It basically gives us the best of both worlds, allowing the addition of text as HTML without corrupting the DOM like stupid `innerHTML` does. I'm definitely replacing all my `innerHTML`s with this immediately. Recommend you do the same to avoid migraines like mine!🤯
