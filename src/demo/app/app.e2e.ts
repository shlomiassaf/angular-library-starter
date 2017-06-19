import { browser, by, element } from 'protractor';
import 'tslib';

describe('App', () => {

  beforeEach(async () => {
    await browser.get('/');
  });


  it('should have <my-lib>', async () => {
    const subject = await element(by.css('my-lib')).isPresent();
    expect(subject).toEqual(true);
  });

  it('should display service text in <my-lib>', async () => {
    const subject = await element(by.css('my-lib')).getText();
    const result  = 'Angular Library Starter';
    expect(subject).toEqual(result);
  });


});
