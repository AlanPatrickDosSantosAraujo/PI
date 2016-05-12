angular.module('templateDirectives', [])

.directive('headerTemplate', [function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/header.tpl.html'
    }
}])

.directive('footerTemplate', [function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/footer.tpl.html'
    }
}]);