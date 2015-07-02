'use strict';
/**
 * @ngdoc function
 * @name ohmyshowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ohmyshowApp
 */
angular.module('ohmyshowApp.controllers').controller('MainCtrl', function($scope, $filter, $http, $q, TVShowsService) {
    $scope.tvseriesList = ['12 Monkeys', '90210', 'Adventure Time', 'American Odyssey', 'Aquarius', 'Beauty and the Beast', 'Better Call Saul', 'Breaking Bad', 'Castle', 'Chicago Pd', 'Covert Affairs', 'Criminal Minds', 'Daredevil', 'Dawson\'s Creek', 'Defiance', 'Dexter', 'Doctor Who', 'Drake and Josh' ,'Durarara!!'];
    $scope.tvShows = [];
    $scope.itemsByPage = 5;
    //Remove HTML attribs
    TVShowsService.getAllTVShowsData($scope.tvseriesList).then(function(data) {
        $scope.tvShows = data;
        $scope.displayedTvShows = [].concat($scope.tvShows);
    });
});