/**
 * Created by david on 6/5/2015.
 */
(function(){
    "use strict";

    angular.module("AngularJsLOB")
        .controller("productEditTagsCtrl",
            ["product",
             "$state",
             productEditTagsCtrl ]
    );

    function productEditTagsCtrl(product,$state){
        var vm = this;
        vm.product = product;

        vm.addTags = function(tags){
            if(tags) {
                var tagArray = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(tagArray) : tagArray;
                vm.newTags = "";
            }
            else{
                alert("Please enter one or more tags separated by commas.");
            }
        }

        vm.removeTag = function(tagIndex){
            //debugger;
            var tags = vm.product.tags;
            vm.product.tags.splice(tagIndex,1);
        }
    }
}());