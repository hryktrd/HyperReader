import { HyperReaderPage } from './app.po';

describe('hyper-reader App', () => {
  let page: HyperReaderPage;

  beforeEach(() => {
    page = new HyperReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
