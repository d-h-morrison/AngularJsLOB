/**
 * Created by david on 6/1/2015.
 */

(function(){
    "use strict";

    var app = angular
        .module("productResourceMock",
                        ["ngMockE2E"]);
    
    app.run(function ($httpBackend) {

        var products;
        products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch handle.",
                "cost": 9.00,
                "price": 19.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
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
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2010",
                "description": "15 gallon capacity rolling garden cart",
                "cost": 20.00,
                "price": 32.99,
                "category": "garden",
                "tags": ["barrow", "cart", "wheelbarrow"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "productId": 6,
                "productName": "Russian T-14 Armata",
                "productCode": "RMS-0945",
                "releaseDate": "May 30, 2014",
                "description": "Battle ready T-14.  Ammunition must be purchased separately.",
                "cost": 45000000.00,
                "price": 75000000.00,
                "category": "arsenal",
                "tags": ["tool", "military", "insurgence"],
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/218607/T-14-Armata-by-Rones.png"
            }
        ];

        var productUrl = "/api/products";
        $httpBackend.whenGET(productUrl).respond(products);

        // Define whenGET for extensible mocking using a regular expression.
        var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*",'');
        $httpBackend.whenGET(editingRegex).respond(function (method,url,data) {
            var product = {"productId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == id) {
                        product = products[i];
                        break;
                    }
                }
            }
            return [200, product,{}];
        });

// I.E. $save()...
        $httpBackend.whenPOST(productUrl).respond(function (method,url,data) {
            var product = angular.fromJson(data);
            //debugger;
            if(!product.productId){
                // New product.  Assign id.
                product.productId = products[products.length-1].productId +1;
                products.push(product);
            }
            else{
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == product.productId) {
                        products[i] = product;
                        break;
                    }
                }
            }

            return [200, product,{}];
        });


        // Pass any requests for application files through--don't intercept them.
        $httpBackend.whenGET(/app/).passThrough();

    })
}());