"use strict";

import timer from './modules/timer';
import popup, { openModal } from './modules/popup';
import cards from './modules/cards';
import form from './modules/form';
import slider from './modules/slider';
import calculator from './modules/calculator';
import tabs from './modules/tabs';

window.addEventListener("DOMContentLoaded", () => {

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 9999);

  tabs();
  popup('[data-modal]', '.modal', modalTimerId);
  timer();
  cards();
  form(modalTimerId);
  slider();
  calculator();
});
