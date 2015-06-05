/**
 * Created by david on 6/5/2015.
 */
(function(){
    "use strict";

    angular
        .module("AngularJsLOB")
        .controller("ProductEditInfoCtrl",
        ["product", // Parameter for the ProductEditCtrl function.
          "$state",
          ProductEditInfoCtrl]
    );

    function ProductEditInfoCtrl(product, $state){
        var vm = this;

        vm.product = product;

        if(vm.product && vm.product.productId){
            vm.title = "Edit: " + vm.product.productName;
        }
        else{
            vm.title = "New Product";
        }

        vm.open = function($event){

            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        }

        vm.save = function(){
            //alert("trying to save...");
            vm.product.$save();
        }

        vm.cancel = function(){
            //alert("trying to cancel...");
            // on cancel, return to product list state...
            $state.go('productList');
        }
    }
}());