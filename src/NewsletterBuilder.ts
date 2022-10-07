import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

import { ArticleData } from './NewsletterArticle.js';

export class NewsletterBuilder extends LitElement {
  @property({ type: String }) title = 'Awesome Newsletter';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--newsletter-builder-background-color);
    }

    main {
      flex-grow: 1;
    }

    main > h1 {
      font-size: calc(16px + 1vmin);
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    const article: ArticleData = {
      title: 'This was launched today',
      caption:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
    };

    return html`
      <main>
        <h1>${this.title}</h1>

        <newsletter-article .data="${article}"></newsletter-article>
      </main>
      <p class="app-footer">
        newsletter built using <a href="https://lit.dev">lit.dev</a>
      </p>
    `;
  }
}
