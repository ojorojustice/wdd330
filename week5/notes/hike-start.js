import Hikes from "./main.js";
//BYUI Instructor solution. This js loads the page with the content having imported the class hike from the other main.js.
const myHikes = new Hikes("hikes");
window.addEventListener("load", () => {
  myHikes.showHikeList();
});
myHikes.hikeList;