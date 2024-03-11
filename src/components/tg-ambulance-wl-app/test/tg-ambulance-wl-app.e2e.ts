import { newE2EPage } from '@stencil/core/testing';

describe('tg-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tg-ambulance-wl-app></tg-ambulance-wl-app>');

    const element = await page.find('tg-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});