/**
 * Created by david on 5/29/2015.
 */

    // Immediately-Invoked Function Expression (IIFE) AKA Self-executing anonymous function...
(function() {
    "use strict";
    var app = angular.module("AngularJsLOB" /*Main module*/,
                            ["common.services",
                                "ui.router",
                             "productResourceMock"]/*dependencies*/);

    app.config(["$stateProvider",
                "$urlRouterProvider",
                function($stateProvider, $urlRouterProvider)
                {
                    // Default route state.
                    $urlRouterProvider.otherwise("/");

                    // Home route (default route).
                    $stateProvider
                        .state("home",{
                            url: "/",
                            templateUrl: "app/welcomeView.html"
                        })

                        // Products state.
                        .state("productList",{
                            url: "/products",
                            templateUrl: "app/products/productListView.html",
                            controller: "ProductListCtrl as vm"
                        })

                        // Edit state.
                        .state("productEdit",{
                            url: "products/edit/:productId",
                            templateUrl:"app/products/productEditView.html",
                            controller: "ProductEditCtrl as vm"
                        })


                }]

    );

}());