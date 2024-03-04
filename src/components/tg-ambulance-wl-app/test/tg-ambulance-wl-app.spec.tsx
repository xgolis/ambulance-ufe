import { newSpecPage } from '@stencil/core/testing';
import { TgAmbulanceWlApp } from '../tg-ambulance-wl-app';

describe('tg-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TgAmbulanceWlApp],
      html: `<tg-ambulance-wl-app></tg-ambulance-wl-app>`,
    });
    expect(page.root).toEqualHtml(`
      <tg-ambulance-wl-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tg-ambulance-wl-app>
    `);
  });
});
