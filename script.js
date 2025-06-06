function init(){
  $.ajaxSetup({async: false});
}

class Gallery {
  constructor(images) {
    this.index = 0;
    this.images = images;
  }
  render(container) {
    this.obj = document.createElement("img");
    this.obj.src = this.images[0];
    this.obj.addEventListener("click", () => {
      this.next();
    })
    if (container) {
      $(`#${container}`).append(this.obj)
    } else {
      return this.obj;
    }

  }
  next() {
    this.index++;
    this.obj.src = this.images[this.index % this.images.length];
  }
  play() {
    this.next();
    setTimeout(this.play.bind(this), 3000);
  }
}
