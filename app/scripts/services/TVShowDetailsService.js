'use strict';

angular.module('ohmyshowApp.services').service('TVShowDetailsService', function($http, $q) {
    this.getShowInfo = function(showId) {
        var deferred = $q.defer();
        $http.get('http://api.tvmaze.com/shows/' + showId + '').success(function(response) {
            var genreList = response.genres;
            var genres = '';
            genreList.forEach(function(currentValue, index, array) {
                genres += currentValue + ' ';
            });
            var tvShowDetail = {
                showTitle: response.name,
                showImage: response.image.medium,
                showNetW: response.network.name,
                showGenres: genres,
                showDesc: response.summary,
                showStatus: response.status
            };
            deferred.resolve(tvShowDetail);
        }).error(function(response) {
            console.error('Could not fetch series: ' + response);
            deferred.reject('Error');
        });
        return deferred.promise;
    };
    this.getTVShowInfo = function(showId) {
        var promise = this.getShowInfo(showId);
        return promise;
    };
});