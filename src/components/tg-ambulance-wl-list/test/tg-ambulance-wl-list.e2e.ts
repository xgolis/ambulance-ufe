import { newE2EPage } from '@stencil/core/testing';

describe('tg-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tg-ambulance-wl-list></tg-ambulance-wl-list>');

    const element = await page.find('tg-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
