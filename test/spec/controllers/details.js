'use strict';

describe('Controller: DetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('ohmyshowApp'));

  var DetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailsCtrl = $controller('DetailsCtrl', {
      $scope: scope
    });
    scope.awesomeThings = "Hello";
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    console.log("Awesome things "+scope.awesomeThings.length);
    expect(scope.awesomeThings).to.equal("Hello");
  });
});
