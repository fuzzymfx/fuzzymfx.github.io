---
author: Anubhab Patnaik
title: "Unfollow all and stats check: LinkedIn Scripts"
date: "2023-04-29"
description: "A linkedin script to remove all your followings :D, and check your following to connection ratio."
tags: ["linkedin", "script", "javascript"]
ShowBreadCrumbs: true 
---


Hey guys, with nothing much to do and while scrolling down aimlessly and looking at useless content on LinkedIn, I wrote a script to unfollow everyone on LinkedIn ( Chill, I did not unfollow you; I didn't run the script on my original account xD) and also a script to count the number of people you are following out of your total connections. 

To try this out, visit [https://www.linkedin.com/feed/followers/](https://www.linkedin.com/feed/followers/), inspect the page, and copy and paste the following script into your console.


`unfollow-script.js`: This script unfollows all your followings on LinkedIn.
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

`stats-script.js`: This script helps you figure out how many people out of your total connections you are following.
```js
// Function to count elements with a specific class name and inner HTML content
function countElementsWithInnerHTML(className, innerHTMLString) {
  const elements = document.getElementsByClassName(className);
  let count = 0;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML.trim() === innerHTMLString) {
      count++;
    }
  }

  return count;
}

// Function to scroll to the bottom of the page
function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

// Function to count elements continuously until no more elements are found
function countAllElementsWithInnerHTML(className, innerHTMLString) {
  let previousCount = 0;
  let currentCount = countElementsWithInnerHTML(className, innerHTMLString);

  function scrollAndCount() {
    scrollToBottom();

    setTimeout(() => {
      previousCount = currentCount;
      currentCount = countElementsWithInnerHTML(className, innerHTMLString);

      if (currentCount > previousCount) {
        scrollAndCount(); // Continue scrolling if new elements are found
      } else {
        console.log(
          "Total number of elements with class '" +
            className +
            "' and inner HTML '" +
            innerHTMLString +
            "':",
          currentCount
        );
      }
    }, 1000); // Adjust the delay as needed
  }

  scrollAndCount();
}

// Call the function with your specified class name and inner HTML string
const innerHTMLString = "Following"; // Change this to the inner HTML string you want to count - e.g. "Following", "Follow", "Follow Back"
countAllElementsWithInnerHTML("artdeco-button__text", innerHTMLString);

```

#### unfollow-script.js

The script scrolls down the `following` page and unfollows each `following`. It then scrolls down again and repeats the process until there are no more followings left.

`buttons` is a list of all the follow buttons on the page. The script then iterates over the list, and selects the button that is a following button. The `0` value in `window.scrollTo(0, button.offsetTop - 260);` is used here to indicate that there is no need to scroll horizontally, i.e., the window should remain at its current horizontal position. `button.offsetTop` refers to the distance of the button element from the top of its parent container. 260 is subtracted from the offsetTop value to ensure that the button is not covered by the LinkedIn navigation bar at the top of the page.

One the button is clicked, the script waits for 100ms to ensure that the button is clicked and the unfollowing process is complete. The script then scrolls down to the bottom of the page and waits for 2 seconds to update the list of followings before running the `runUnfollowAll` function again. If there are no more followings left, the script stops.

Happy unfollowing! :D

### stats-script.js

The script scrolls down the `following` page and counts the number of `following` buttons. It then scrolls down again and repeats the process until there are no more followings left.