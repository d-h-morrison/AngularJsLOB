/**
 * Created by david on 6/5/2015.
 */
(function(){
    "use strict";

    angular
        .module("AngularJsLOB")
        .controller("ProductEditCtrl",
        ["product", // Parameter for the ProductEditCtrl function.
            ProductEditCtrl]
        );

    function ProductEditCtrl(product){
        var vm = this;

        vm.product = product;

        if(vm.product && vm.product.productId){
            vm.title = "Edit: " + vm.product.productName;
        }
        else{
            vm.title = "New Product";
        }
    }
}());