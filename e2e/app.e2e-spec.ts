import { ConduitAppPage } from './app.po';

describe('conduit-app App', function() {
  let page: ConduitAppPage;

  beforeEach(() => {
    page = new ConduitAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
