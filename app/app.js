/**
 * Created by david on 5/29/2015.
 */

    // Immediately-Invoked Function Expression (IIFE) AKA Self-executing anonymous function...
(function() {
    "use strict";
    var app = angular.module("AngularJsLOB" /*Main module*/,
                            ["common.services",
                             "ui.router", // Most full-featured Angular router based on named, nested and parallel views.
                             "ui.mask",  // Angular utility class for masking data entry fields.
                             "ui.bootstrap", // Bootstrap UI utilities.
                             "productResourceMock"]/*dependencies*/);

    app.config(["$stateProvider",
                "$urlRouterProvider",
                function($stateProvider, $urlRouterProvider)
                {

                    // The $urlRouterProvider service watches $location for changes to the URL.
                    // When $location changes, it finds a matching state and activates it.

                    // Default route as indicated by the "otherwise" method.
                    // If no valid state, or no active state name provided, we will navigate to the home page.
                    // Notice the fragment identifier "/" is that of the home state.
                    $urlRouterProvider.otherwise("/");

                    // Home route (default route).
                    $stateProvider
                        .state("home",{
                            url: "/", // Fragment identifier.
                            templateUrl: "app/welcomeView.html"
                        })

                        // Products state.
                        .state("productList",{
                            // DO NOT OMIT THE "/" URL PREFIX OR THE ROUTE WILL NOT WORK.
                            url: "/products", // Fragment identifier.
                            templateUrl: "app/products/productListView.html",
                            controller: "ProductListCtrl as vm"
                        })

                        // Edit state.
                        .state("productEdit",{
                            // DO NOT OMIT THE "/" URL PREFIX OR THE ROUTE WILL NOT WORK.
                            abstract: true,  // Do not invoke the Edit state unless it makes sense.
                            url: "/products/edit/:productId", // Parameter passed to the state.
                            templateUrl:"app/products/productEditView.html",
                            controller: "ProductEditCtrl as vm",
                            resolve: {
                                productResource: "productResource",
                                product: function(productResource, $stateParams){
                                    var productId = $stateParams.productId;
                                    return productResource.get({productId: productId}).$promise;
                                }
                            }
                        })

                        .state("productEdit.price",{
                            url:"/price",
                            templateUrl: "app/products/productEditPriceView.html"
                        })

                        .state("productEdit.tags",{
                            url:"/tags",
                            templateUrl: "app/products/productEditTagsView.html"
                        })

                        .state("productEdit.info",{
                            url:"/info",
                            templateUrl: "app/products/productEditInfoView.html",
                            controller: "ProductEditInfoCtrl as vm",
                            resolve: {
                                productResource: "productResource",
                                product: function(productResource, $stateParams){
                                    var productId = $stateParams.productId;
                                    return productResource.get({productId: productId}).$promise;
                                }
                            }
                        })

                        // Product detail state.
                        .state("productDetail",{
                            // DO NOT OMIT THE "/" URL PREFIX OR THE ROUTE WILL NOT WORK.
                            url: "/products/:productId", // Parameter passed to the state.
                            templateUrl:"app/products/productDetailView.html",
                            controller: "ProductDetailCtrl as vm",
                            resolve: {
                                productResource: "productResource",
                                product: function(productResource, $stateParams){
                                    var productId = $stateParams.productId;
                                    return productResource.get({productId: productId}).$promise;
                                }
                            }
                        })

                }]

    );

}());