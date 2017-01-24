module.exports = function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'close': '&onClose'
    },
    templateUrl: '/html/components/keywordSearch.html'
  };
}