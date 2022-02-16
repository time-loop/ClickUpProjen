import { clickupCdk } from '../src';

describe('ClickUpCdkTypeScriptApp', () => {
  describe('defaults', () => {
    const p = new clickupCdk.ClickUpCdkTypeScriptApp({
      name: 'test',
    });
    test('prettier is enabled', () => {
      expect(p.prettier).toBeTruthy();
    });
    test('jest is enabled', () => {
      expect(p.jest).toBeTruthy();
    });
    // TODO: soooo many more tests need to be written here.
  });
});
