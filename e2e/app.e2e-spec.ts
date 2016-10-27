import { NgCliEnvPage } from './app.po';

describe('ng-cli-env App', function() {
  let page: NgCliEnvPage;

  beforeEach(() => {
    page = new NgCliEnvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
