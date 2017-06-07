import { Html1Page } from './app.po';

describe('html1 App', () => {
  let page: Html1Page;

  beforeEach(() => {
    page = new Html1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
