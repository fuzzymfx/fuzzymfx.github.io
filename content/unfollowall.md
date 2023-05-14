---
author: Anubhab patnaik
title: "Unfollow all: A LinkedIn Script"
date: "2023-04-29"
description: "A linkedin script to remove all your followings :D"
tags: ["linkedin", "script", "javascript"]
ShowBreadCrumbs: true 
---


Hey guys, with nothing much to do and while scrolling down aimlessly and looking at useless content on LinkedIn, I wrote a script to unfollow everyone on LinkedIn ( Don't worry, I did not run the script on my original xD)

To try this out, visit [https://www.linkedin.com/feed/followers/](https://www.linkedin.com/feed/followers/), inspect the page, and copy and paste the following script into your console.

```js
(() => {
 async function unfollowAll() {
  const buttons = document.querySelectorAll('button.follow.is-following') || [];

  for (const button of buttons) {
   const name = button.parentElement.querySelector('.follows-recommendation-card__name',).innerText;
   console.log('Unfollowed ', name);

   window.scrollTo(0, button.offsetTop - 260);
   button.click();
   await new Promise((resolve) => setTimeout(resolve, 100));
  }
 }

 async function runUnfollowAll() {
  await unfollowAll();
  window.scrollTo(0, document.body.scrollHeight);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const buttons = document.querySelectorAll('button.follow.is-following') || []; 

  if (buttons.length) runUnfollowAll();
 }
 runUnfollowAll();
})();
```

#### Working

The script scrolls down the page and unfollows everyone. It then scrolls down again and repeats the process until there are no more followings left.

`buttons` is a list of all the follow buttons on the page. The script then iterates over the list, and selects the button that is a following button. The `0` value in `window.scrollTo(0, button.offsetTop - 260);` is used here to indicate that there is no need to scroll horizontally, i.e., the window should remain at its current horizontal position. `button.offsetTop` refers to the distance of the button element from the top of its parent container. 260 is subtracted from the offsetTop value to ensure that the button is not covered by the LinkedIn navigation bar at the top of the page.

It then waits for 100ms to ensure that the button is clicked and the unfollowing process is complete. The script then scrolls down to the bottom of the page and waits for 2 seconds to update the list of followings before running the `runUnfollowAll` function again. If there are no more followings left, the script stops.

Happy unfollowing! :D
