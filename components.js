class Modal {
  constructor(text, content) {
    this.text = text;
    this.content = content;
  }
  render(container) {
    this.button = document.createElement("div");
    this.button.innerHTML = this.text;
    this.button.addEventListener("click", () => {
      this.modal.style.display = "block";
    })

    this.modal = document.createElement("div");
    this.modal.setAttribute("class", "modal");

    this.modal_content = document.createElement("div");
    this.modal_content.setAttribute("class", "modal-content");

    this.modal_header = document.createElement("div");
    this.modal_header.setAttribute("class", "modal-header");

    this.modal_body = document.createElement("div");
    this.modal_body.setAttribute("class", "modal-body");
    console.log(typeof (this.content) == "object")
    if (typeof (this.content) == "object") {
      this.modal_body.append(this.content);
    } else {
      this.modal_body.innerHTML = this.content;
    }

    this.closeButton = document.createElement("span");
    this.closeButton.setAttribute("class", "close");
    this.closeButton.innerHTML = "&times";
    this.closeButton.addEventListener("click", () => {
      this.modal.style.display = "none";
    })

    this.modal_header.append(this.closeButton);
    this.modal_content.append(this.modal_header);
    this.modal_content.append(this.modal_body);
    this.modal.append(this.modal_content);

    $(`#${container}`).append(this.button)
    $(`#${container}`).append(this.modal)
  }
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

//Flip Card
//Concept Source - https://www.w3schools.com/howto/howto_css_flip_card.asp
class FlipCard {
  constructor(front, back) {
    this.front = front;
    this.back = back;
  }
  render(container) {
    this.obj = document.createElement("div");
    this.obj.setAttribute("class", "flip-card");
    this.obj.addEventListener("click", () => {
      console.log(this.obj);
      this.obj.classList.toggle("flip");
    })
    let build = "";
    build += `<div class="flip-front">${this.front}</div>`
    build += `<div class="flip-back">${this.back}</div>`

    this.obj.innerHTML = build
    $(`#${container}`).append(this.obj)
  }
}

//Collapsible
//Concept Source - https://www.w3schools.com/howto/howto_js_collapsible.asp
class Collapsible {
  constructor(text, content) {
    this.text = text;
    this.content = content;
  }
  render(container) {
    this.button = document.createElement("button");
    this.button.setAttribute("class", "collapsible");
    this.button.innerHTML = this.text;

    this.div = document.createElement("div");
    this.div.setAttribute("class", "content");
    this.div.innerHTML = this.content;

    this.button.addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    })

    $(`#${container}`).append(this.button)
    $(`#${container}`).append(this.div)
  }
}
