/*jslint browser: true indent:2*/
/* Determine the best event to use */

(function () {
  'use strict';

  var toggleButtons, click, i;

  click = 'click';

  if (document.documentElement.hasOwnProperty('ontouchstart')) {
    click = 'touchstart';
  }

  /* Find all the elements with the data attribute */
  toggleButtons = document.querySelectorAll('[data-toggle]');

  /* A function to toggle the class */
  function toggle(ev) {
    ev.preventDefault();
    ev.target.classList.toggle('is-on');
  }

  /* Put everything togther */
  for (i = 0; i < toggleButtons.length; i = i + 1) {
    toggleButtons[i].addEventListener(click, toggle, false);
  }
}());