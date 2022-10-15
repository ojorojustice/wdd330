// Instructor's solution: The controller handles the logic, so the 2 other modules are assembled here.
import HikeModel from './hikeModel.js';
import HikesView from './hikesView.js';


export default class HikesController {
  
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }
  showHikeList() {
    const hikesArray = this.hikeModel.getAllHikes();
    this.hikesView.renderHikeList(this.parentElement, hikesArray);
    this.addHikeListener();
  }
  showOneHike(hikeName) {
    const hike = this.hikeModel.getHikeByName(hikeName);
    this.hikesView.renderOneHikeFull(
      this.parentElement,
      hike
    ).ontouchend = () => {
      this.showHikeList();
    };
  }
  
  addHikeListener() {
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}