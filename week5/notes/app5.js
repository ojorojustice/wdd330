import HikesController from './hikesController.js';
//BYUI Instructor solution. This js loads the page with the content having imported the class hike from the other hikesController.js.
const myHikesController = new HikesController('hikes');
window.addEventListener('load', () => {
  myHikesController.showHikeList();
});