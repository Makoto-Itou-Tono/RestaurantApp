import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEachKnow(() => {
    page = new AppPage();
  });

  it('should display welcome message Gaikoku no', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to RestaurantApp! Gaikoku no');
  });
});
