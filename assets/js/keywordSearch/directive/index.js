module.exports = function (moduleApp) {
  moduleApp
    .controller('KeywordSearchController', ['$scope', '$timeout', function ($scope, $timeout) {
      $scope.suggestions = [{key: a, value: b},{key: c, value: d}];
    }])
    .directive('keywordSearchForm', require('./keywordSearchFormDirective.js'));
};