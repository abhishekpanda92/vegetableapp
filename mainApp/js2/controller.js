'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
function storeController($scope, $routeParams, DataService,$window,filterFilter) {

    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;
    $scope.show = false;
    $scope.search =  DataService.get("key");
    $scope.displayproducts = filterFilter($scope.store.products, $scope.search);

    $scope.setCategory = function (searchVal)
    {
      DataService.set("key", searchVal);
      console.log('Category Set New');

      $window.location.href = 'index.html#!/products';
    }

    $scope.moveToCheckOut = function ()
    {
      window.location.href = 'index.html#!/cart';
    }

    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}
