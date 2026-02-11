import "./about.css"

import { navBar } from "./navbar"

// navigationBar 
navBar()

// what we section 
const items = document.querySelectorAll('.wb-item');

items.forEach(item => {
  const trigger = item.querySelector('.wb-trigger');

  trigger.addEventListener('click', () => {
    items.forEach(i => {
      if (i !== item) {
        i.classList.remove('wb-active');
      }
    });

    item.classList.toggle('wb-active');
  });
});
