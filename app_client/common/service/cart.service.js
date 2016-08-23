(function(){
    angular.module('sportsStore')
    .factory('cart',function(){
        var cartData = [];
        return {
            addProduct: function(id,name,price){
                var addToExistingItem = false;
                for(var i=0;i<cartData.length;i++){
                    if(cartData[i].name == name){
                        cartData[i].count++;
                        addToExistingItem = true;
                        console.log('count++ lo');
                    }
                }
                if(!addToExistingItem){
                        cartData.push({
                            //id:id,
                            name:name,
                            price:price,
                            count:1
                        });
                        console.log('push product lo');
                    }
               // console.log('Nothing happen lo');
                console.log(cartData);
            },
            
            removeProduct: function(id){
                var itemDeleted = false;
                for(var i=0;i<cartData.length;i++){
                    if(cartData[i].id == id){
                        cartData.slice(i,1);
                        itemDeleted = true;
                    }
                    if(!itemDeleted){
                        console.log('Item is not in the cart');
                    }
                }
            },
            
            getProducts: function(){
                return cartData;
            }
        }
    })
})();