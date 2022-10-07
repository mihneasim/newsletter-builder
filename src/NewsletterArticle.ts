import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export type ArticleData = {
  title: string;
  caption: string;
  image?: string;
  metaTitle?: string; // i.e. "TODAY'S TOP STORY
  callToAction?: { title: string; url: string };
};

export class NewsletterArticle extends LitElement {
  @property({ type: Object }) data: ArticleData = {
    title: '',
    caption: '',
  };

  static styles = css`
    article {
      border-bottom: 3px solid #eee;
      margin-bottom: 1em;
      padding-bottom: 0.5em;
    }
    .meta-title {
      color: #00bdc3;
      font-size: calc(6px + 1vmin);
      text-transform: uppercase;
      font-weight: bold;
      font-family: Roboto, sans-serif;
      margin: 0 3% 0.5em;
    }
    h2 {
      font-size: calc(10px + 1vmin);
      line-height: 1.5;
      margin: 0 3% 1em;
    }
    section {
      font-size: calc(8px + 1vmin);
      line-height: 1.75;
      text-align: justify;
      margin: 0 3%;
    }
    img {
      width: 100%;
      margin-bottom: 1em;
    }
    .call-to-action {
      text-align: right;
      font-size: calc(8px + 1vmin);
      margin: 0 3% 1em;
    }
    .call-to-action a {
      text-decoration: none;
    }
  `;

  render() {
    return html`
      <article>
        ${this.data.metaTitle
          ? html`<div class="meta-title">${this.data.metaTitle}</div>`
          : html``}

        <h2>${this.data.title}</h2>

        ${this.data.image
          ? html`<img alt="" src="${this.data.image}" />`
          : html``}

        <section>${this.data.caption}</section>

        ${this.data.callToAction
          ? html`<div class="call-to-action">
              <a href="${this.data.callToAction.url}" target="_blank"
                >${this.data.callToAction.title}</a
              >
            </div>`
          : html``}
      </article>
    `;
  }
}
