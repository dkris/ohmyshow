'use strict';
/**
 * @ngdoc function
 * @name ohmyshowApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the ohmyshowApp
 */
angular.module('ohmyshowApp.controllers').controller('DetailsCtrl', function($scope, $routeParams, TVShowDetailsService, TVShowRatingService) {
    $scope.showId = $routeParams.showId;
    $scope.labels = [];
    $scope.datas = [];
    var that = this;
    TVShowDetailsService.getTVShowInfo($scope.showId).then(function(data) {
        $scope.showTitle = data.showTitle;
        $scope.showImage = data.showImage;
        $scope.showNetW = data.showNetW;
        $scope.showGenres = data.showGenres;
        $scope.showDesc = data.showDesc;
        $scope.showStatus = data.showStatus;
        TVShowRatingService.getRatingsForShow($scope.showTitle).then(function(data) {
            for (var label in data) {
                $scope.labels.push(label);
                $scope.datas.push(data[label]);
            }
            that.lineData = {
                labels: $scope.labels,
                series: [
                    [7.1, 5.7, 6.1, 5.4, 4.9, 7.2, 6]
                ]
            };
        });
    });
});