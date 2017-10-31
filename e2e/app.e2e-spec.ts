import { EcommerceTiendaPage } from './app.po';

describe('ecommerce-tienda App', function() {
  let page: EcommerceTiendaPage;

  beforeEach(() => {
    page = new EcommerceTiendaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
