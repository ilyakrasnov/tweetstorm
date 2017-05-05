import { TweetstormPage } from './app.po';

describe('tweetstorm App', () => {
  let page: TweetstormPage;

  beforeEach(() => {
    page = new TweetstormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
