import { Selector, t } from 'testcafe';

export default class LandingPagePO {
  searchBox: Selector;
  searchButton: Selector;
  consentAgreeButton: Selector;

  constructor() {
    this.searchBox = Selector('input[name="q"]');
    this.searchButton = Selector('input[type="submit"]');
    this.consentAgreeButton = Selector('button#L2AGLb');
  }

  async agreeToConsent() {
    await t
      .expect(this.consentAgreeButton.exists).ok()
      .click(this.consentAgreeButton)
  }

  async search(query: string) {
    await t
      .typeText(this.searchBox, query)
      .click(this.searchButton);
  }
}
