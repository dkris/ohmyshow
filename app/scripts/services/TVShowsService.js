'use strict';

angular.module('ohmyshowApp.services').service('TVShowsService', function($http, $q, $sce) {
    this.getDataForTvShow = function(index) {
        var deferred = $q.defer();
        $http.get('http://api.tvmaze.com/singlesearch/shows?q=' + index + '').success(function(response) {
            var genreList = response.genres;
            var genres = "";
            genreList.forEach(function(currentValue, index, array) {
                genres += currentValue + '\n';
            });
            var tvShow = {
                name: response.name,
                imgUrl: response.image.medium,
                genre: genres,
                desc: $sce.trustAsHtml(response.summary),
                id: response.id
            };
            deferred.resolve(tvShow);
        }).error(function(response) {
            console.error('Could not fetch series: ' + response);
            deferred.reject('Error');
        });
        return deferred.promise;
    };
    this.getAllTVShowsData = function(tvseriesList) {
        var promises = [];
        var that = this;
        tvseriesList.forEach(function(currentValue, index, array) {
            var promise = that.getDataForTvShow(currentValue);
            promises.push(promise);
        });
        return $q.all(promises);
    };
});