/**
 * Created by david on 5/29/2015.
 * This is the productResource service.
 */
(
    function(){
        "use strict";

        angular
            .module("common.services")
            .factory("productResource",["$resource", productResource]);

        function productResource($resource){
            return $resource("/api/products/:productId")
        }
    }()
);