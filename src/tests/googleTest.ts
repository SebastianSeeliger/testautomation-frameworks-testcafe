import { Selector } from 'testcafe';
import landingPagePO from '../pages/LandingPagePO';

fixture('Google homepage tests')
  .page('https://www.google.com');

test('Search for TestCafe', async (t) => {
  const googleHomePage = new landingPagePO();

  await googleHomePage.agreeToConsent();
  await googleHomePage.search('TestCafe');

  const resultStats = Selector('#result-stats');

  await t.expect(resultStats.exists).ok();
});
