import { MySecondPage } from './app.po';

describe('my-second App', function() {
  let page: MySecondPage;

  beforeEach(() => {
    page = new MySecondPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
