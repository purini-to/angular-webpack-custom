import app from './app';

describe('app', () => {

  describe('NoteCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('NoteCtrl', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
    });
  });
});