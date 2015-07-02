'use strict';

angular.module('ohmyshowApp.services').service('TVShowRatingService', function($http, $q) {
    this.getRatingInfoForShow = function(showName) {
        var deferred = $q.defer();
        $http.get('http://api.parrotanalytics.com/ratings?key=h0y3PiuUHytcS1p6mTO8&title=' + showName + '&period=7  ').success(function(response) {
            var rating = response.ratings;
            deferred.resolve(rating);
        }).error(function(response) {
            console.error('Could not fetch show info: ' + response);
        });
        return deferred.promise;
    };
    this.getRatingsForShow = function(showName) {
        var promise = this.getRatingInfoForShow(showName);
        return promise;
    };
});