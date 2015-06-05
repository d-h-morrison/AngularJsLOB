/**
 * Created by david on 5/29/2015.
 */
// Use an Immediately Invokes Function Expression (IIFE).
(
  function(){
      "use strict";

      angular
          .module("AngularJsLOB")// Register with main module.
          .controller("ProductListCtrl",
                        ["productResource",
                            ProductListCtrl]);

      // Ask angular to pass a reference to the productResource service to this specific controller function.
      // We do this by adding the productResource as a parameter.
      function ProductListCtrl(productResource){
          // Define Model
          var vm = this;

            productResource.query(function(data){
                vm.products = data;
            });

          // Define Methods for Actions in the view.
          vm.showImage = false;
          vm.toggleImage = function(){
              vm.showImage = !vm.showImage;
          }

          /*vm.products = [
           {" productId": 1,
           "productName": "Leaf Rake",
           "productCode": "GDN-0011",
           "releaseDate": "March 19, 2009",
           "description": "Leaf rake with 48-inch handle.",
           "cost": 9.00,
           "price": 19.95,
           "category": "garden",
           "tags": [ "leaf", "tool" ],
           "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
           },
           {
           "productId": 5,
           "productName": "Hammer",
           "productCode": "TBX-0048",
           "releaseDate": "May 21, 2013",
           "description": "Curved claw steel hammer",
           "cost": 1.00,
           "price": 8.99,
           "category": "toolbox",
           "tags": ["tool"],
           "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
           },
           {
           "productId": 6,
           "productName": "Russian T-14 Armata",
           "productCode": "RT14-0945",
           "releaseDate":"May 30, 2014",
           "description": "Battle ready T-14.  Ammunition must be purchased separately.",
           "cost": 45000000.00,
           "price": 75000000.00,
           "category": "arsenal",
           "tags": ["tool", "military", "insurgence"],
           "imageUrl":"https://openclipart.org/image/300px/svg_to_png/218607/T-14-Armata-by-Rones.png"
           }
           ];*/
      }
  }()
);