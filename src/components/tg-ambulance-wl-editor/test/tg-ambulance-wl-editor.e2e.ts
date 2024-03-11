import { newE2EPage } from '@stencil/core/testing';

describe('tg-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tg-ambulance-wl-editor></tg-ambulance-wl-editor>');

    const element = await page.find('tg-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
