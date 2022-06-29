class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
  }
}

class PopUpInfo extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({mode: 'open'});

      const wrapper = document.createElement('span');
      wrapper.setAttribute('class', 'wrapper');

      const icon = document.createElement('span');
      icon.setAttribute('class', 'icon');
      icon.setAttribute('tabindex', 0);

      const info = document.createElement('span');
      info.setAttribute('class', 'info');

      console.log(this.attributes);
      console.log(this.getAttributeNames());
      console.log(this.hasAttribute('data-text'));
      
      const text = this.getAttribute('data-text');
      info.textContent = text;

      console.log(text);

      let imgUrl;
      if(this.hasAttribute('img')) {
        imgUrl = this.getAttribute('img');
      } else {
        imgUrl = 'img/info_actual.png';
      }

      const img = document.createElement('img');
      img.src = imgUrl;
      icon.appendChild(img);

      const linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('href', 'style.css');

      shadow.appendChild(linkElem);
      shadow.appendChild(wrapper);
      wrapper.appendChild(icon);
      wrapper.appendChild(info);
      console.log(info.isConnected);
    }
}

customElements.define('popup-info', PopUpInfo);
customElements.define('word-count', WordCount, { extends: 'p' });
