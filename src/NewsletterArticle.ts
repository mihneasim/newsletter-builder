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

  static styles = css``;

  render() {
    return html` <article><h2>${this.data.title}</h2></article> `;
    // const article: ArticleData = this.data;
    // return html` ${article.title} `;
  }
}
