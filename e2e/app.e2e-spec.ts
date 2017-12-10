import { AngularMapsTestPage } from './app.po';

describe('angular-maps-test App', () => {
  let page: AngularMapsTestPage;

  beforeEach(() => {
    page = new AngularMapsTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
