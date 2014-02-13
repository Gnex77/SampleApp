'use strict';

angular.module('sampleCartClientApp')
    .controller('ProductsCtrl', function($scope, $rootScope) {
        var ProdList = [{
            id: 1,
            name: 'Star Wars: A New Hope',
            price: 8.99,
            img: '../images/starwars.jpg',
            quantity: 25,
            description: 'Original that started the phenomenom!',
            type: 'DVD',
            genre: 'Sci-Fi'
        }, {
            id: 2,
            name: 'The Avengers',
            price: 19.99,
            img: '../images/avengers.jpg',
            quantity: 15,
            description: 'Marvel\'s Epic Superhero movie.',
            type: 'Blu-Ray',
            genre: 'Superhero'
        }, {
            id: 3,
            name: 'Usual Suspects',
            price: 9.99,
            img: '../images/usualsuspects.jpg',
            quantity: 5,
            description: 'Who is Kaizer Sousay?',
            type: 'Blu-Ray',
            genre: 'Thriller'
        }, {
            id: 4,
            name: 'Man of Steel',
            price: 11.99,
            img: '../images/manofsteel.jpg',
            quantity: 5,
            description: 'Superman reboot!',
            type: 'Blu-Ray',
            genre: 'Superhero'
        }];

        $scope.products = ProdList;
        $rootScope.inCart = [];

        $rootScope.isCartEmpty = function() {
            if ($scope.inCart.length > 0) {
                return false;
            } else {
                return true;
            }
        };



        $scope.addToCart = function(id) {
            var prod = $.grep(ProdList, function(e) {
                if (e.id === id) {
                    if (e.quantity > 0) {
                        e.quantity = e.quantity - 1;
                        $rootScope.inCart.push(e);
                    }                    
                }                
                return e.id === id;
            });
        };
    });