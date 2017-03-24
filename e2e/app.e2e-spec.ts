import { D3startPage } from './app.po';

describe('d3start App', function() {
  let page: D3startPage;

  beforeEach(() => {
    page = new D3startPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
