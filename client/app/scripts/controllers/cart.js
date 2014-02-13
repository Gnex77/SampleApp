'use strict';

angular.module('sampleCartClientApp')
    .controller('CartCtrl', function($scope, $rootScope) {
        $scope.Cart = $rootScope.inCart;
        $scope.totalSale = 0;

        $scope.calculateTotal = function() {
            var total = 0;
            if ($rootScope.inCart.length > 0) {
                angular.forEach($rootScope.inCart, function(value, key) {
                    total += value.price;
                });
                $scope.totalSale = total;
            }
        };
    });