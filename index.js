const productsth=document.querySelector('.product_cardie')
productsth.innerHTML=''

let newArr=[]
function getProductApi(){
     fetch("https://fakestoreapi.com/products/").then(function(response){
          return response.json()
     }).then(function(products){

        newArr=products
        console.log(products)
        addProduct()

})

}
getProductApi()

function addProduct(){

    newArr.forEach(function(product){
        productsth.innerHTML+=`
            <div class="d-flex flex-column justify-content-center align-items-center px-3 py-3 product_cardie" >
                    <img src="${product.image}" alt="${product.title}" id="product_cardie_image" >
                    <h3 class="text-success fs-5 mt-2">${product.title}</h3>
                     <p class="text-start product_cardie_text">${product.description}</p>
                    <strong class="product_cardie_text one">$${product.price}</strong>
                    <button class="button_now" type="button">Add to Cart</button>
            </div>
`


})

}         
