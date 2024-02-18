import { newSpecPage } from '@stencil/core/testing';
import { TgAmbulanceWlList } from '../tg-ambulance-wl-list';

describe('tg-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TgAmbulanceWlList],
      html: `<tg-ambulance-wl-list></tg-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as TgAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    expect(wlList?.waitingPatients?.length).toEqual(expectedPatients);
  });
});
