'use strict';

describe('MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ohmyshowApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    scope.tvShows = "something";
  }));

  it('Should contain a list of tv shows', function () {
    expect(scope.tvShows).to.not.equal(null);
  });
});
