import { render } from '@lit-labs/ssr/lib/render-with-global-dom-shim.js';
import { html } from 'lit';
import * as regs from './out-tsc/src/registrations.js';

const ssrResult = render(html` <newsletter-builder></newsletter-builder> `);
for (const line of ssrResult) {
  console.log(line);
}
