import { newSpecPage } from '@stencil/core/testing';
import { TgAmbulanceWlEditor } from '../tg-ambulance-wl-editor';

describe('tg-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TgAmbulanceWlEditor],
      html: `<tg-ambulance-wl-editor></tg-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <tg-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tg-ambulance-wl-editor>
    `);
  });
});
