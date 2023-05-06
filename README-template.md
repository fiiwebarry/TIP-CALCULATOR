# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot


(https://user-images.githubusercontent.com/49417507/236646606-00a8b6b6-2ecc-4094-b7ac-99707f1a52a4.PNG)

![Tip-calulator mobile view1](https://user-images.githubusercontent.com/49417507/236646636-6bdcccbd-1e48-41ab-916d-dfe921176bfe.PNG)

![Tip-calulator mobile view2](https://user-images.githubusercontent.com/49417507/236646641-bcfe5c08-078f-4e3a-b7cd-991d7471fb87.PNG)


Tip-calulator desktop view.PNG
Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5
- CSS
- JAVASCRIPT

### What I learned

so far integrating javascript with Html has been underated but Dom manipulation is basically one the most interesting and important expect of web development. i remember watching youtube videos on Dom manipution to aid with the project. In the process i learnt more about eventlisteners,methods and how to make them do my bidding. i started the project with document.getElementById() method but during the tutorials i learnt of its limitations so i switched to queryselectors.
During the project i also improved more on making my page responsive in every view. it used to be a burden but with the project the whole process was seemless and easy.
i enjoyed writing codes on javascript, looping through a classList for the project's functionality. i enjoyed writting arrow functions and callback functions.

```html
<h1>Some HTML code I'm proud of</h1>
<span for="int" id="int2" class="hidden">can't be zero</span><br />
```

```css
.proud-of-this-css {
}
#Bill:focus{

 border-color:blue;
 outline: none;
}
 .hidden{
   display: none;

}
 .visible{
   display:initial;
   color: red !important;
```

```js
const removeColor = () => {
  let btns = document.querySelectorAll(".btnCalc");
  for (i = 0; i < btns.length; i++) {
    btns[i].classList.remove("root");
  }
};
```

### Continued development

I'll love to focus more on my javascript, write more code for the functionality of any website.
i want be grounded in javascript then move on to a framework (react.js)

### Useful resources

- [Example resource 1]code lab: dom manipulation - improving the functionality of the site was made easier with the youtube video. it's highly recommendable.
-

## Author

- Website - [FIIWE BARISANEM](https://www.your-site.com)
- Frontend Mentor - [@fiiwebarry](https://www.frontendmentor.io/profile/fiiwebarry)
- Twitter - [@fiiwebarry](https://www.twitter.com/fiiwebarry)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

first, i'll like to appreciate myself for the consistency, the hardwork and commitment while working on this amazing project. My gratitude to Izzyman, his support and guidance is well appreciated.
