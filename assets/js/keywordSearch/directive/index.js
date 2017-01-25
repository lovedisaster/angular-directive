let angular = require('angular');
// Declare Module Name
var moduleName = "PartsalesCompatibilitySearch";

// Declare Module and Module Dependencies
var moduleApp = angular.module(moduleName, [])

module.exports = function (moduleApp) {
  moduleApp
    .controller('KeywordSearchController', ['$scope', '$timeout', function ($scope, $timeout) {
      $scope.suggestions = [{key: a, value: b},{key: c, value: d}];
    }])
    .directive('keywordSearchForm', require('./keywordSearchDirective.js'));
};