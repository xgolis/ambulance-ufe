import { newSpecPage } from '@stencil/core/testing';
import { TgAmbulanceWlApp } from '../tg-ambulance-wl-app';

describe('tg-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [TgAmbulanceWlApp],
      html: `<tg-ambulance-wl-app base-path="/"></tg-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("tg-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [TgAmbulanceWlApp],
      html: `<tg-ambulance-wl-app base-path="/ambulance-wl/"></tg-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("<pfx>-ambulance-wl-list");
  });
});