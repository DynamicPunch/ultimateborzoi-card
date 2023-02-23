import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/meme-maker/meme-maker.js";


class myCard extends LitElement {
  static properties = {
    title: { type: String },
    image: { type: String },
    topLabel: { type: String },
    detail: { type: String },
  };

 
  constructor() {
    super();
    this.title = "Dog Card";
    this.image =
      "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B700%2C759%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F08%2F05%2Fborzoi-is-big-tiktok-535986771-2000.jpg";
    this.topLabel = "Dog Facts";
    this.detail = "Borzoi";
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="card">
          <h2 class="header">${this.title}</h2>
          <meme-maker
            class="image"
            alt=${this.topLabel}
            image-url=${this.image}
            top-text=${this.topLabel}
          ></meme-maker>
          <div class="stats">
            <h3 class="header">${this.detail}</h3>
            <slot name="stats"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("my-card", myCard);