let products;
let productsdiv=document.querySelector(".productsdiv")

async function getProductsData()
{

    try
    {
        products=await fetch("./products.json")
        products=await products.json()
        products.map(({id,name,image,price,quantity})=>
        {
            productsdiv.innerHTML+=`
            <div class="productcard" id=${id}>
                    <div class="imgdiv">
                        <img src=${image} alt="">
                    </div>
                    <div class="detailsdiv">
                        <div class="left">
                            <h4>${name}</h4>
                            <h5>${price}</h5>
                        </div>
                        <div class="right">
                        <button onclick="addProduct(${id})"class="btn">
                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                        </button>
                        </div>
                    </div>
                </div>
            `
        })
    }
    catch(err)
    {
        console.log(err.message);
    }
}
getProductsData()

let cart=[]

function addProduct(id)
{
    let getSingleProduct=document.getElementById(`${id}`)
    console.log(getSingleProduct.id);
    console.log(products);
    console.log(cart);

    

    let findProduct=products.find(p => 
    {
        console.log(p);
        if(cart.length==0)
        {
            return cart.push(p)
        }
        console.log(p.id);
        console.log(getSingleProduct.id);
        if(p.id==getSingleProduct.id)
        {
            
            console.log(p);
            cart.find(p=>
                {
                    return p.quantity+=1
                })
        }
    })


    console.log(findProduct);
    cartproductsdiv.innerHTML=""
    console.log(cart);
    getCartProductsData()
}

let cartproductsdiv=document.querySelector(".cartproductsdiv")

async function getCartProductsData()
{
    try
    {
        cart.map(({id,name,image,price,quantity})=>
        {
            cartproductsdiv.innerHTML+=`
            <div class="productcard" id=${id}>
                    <div class="imgdiv">
                        <img src=${image} alt="">
                    </div>
                    <div class="detailsdiv">
                        <div class="left">
                            <h4>${name}</h4>
                            <h5>${price}</h5>
                        </div>
                        <div class="right">
                        <button onclick="addProduct(${id})"class="btn">
                        <i>${quantity}</i>
                        </button>
                        </div>
                    </div>
                </div>
            `
        })
    }
    catch(err)
    {
        console.log(err.message);
    }
}

// // Initialize an empty shopping cart object
// const shoppingCart = {};

// // Function to add a product to the cart
// function addToCart(product, quantity = 1) {
//     if (quantity <= 0) {
//         console.log("Quantity should be greater than 0.");
//         return;
//     }

//     if (shoppingCart.hasOwnProperty(product)) {
//         // Product is already in the cart, increase the quantity
//         shoppingCart[product] += quantity;
//         console.log(`${quantity} ${product}(s) added to the cart. Total quantity for ${product}: ${shoppingCart[product]}`);
//     } else {
//         // Product is not in the cart, add it with the given quantity
//         shoppingCart[product] = quantity;
//         console.log(`${quantity} ${product}(s) added to the cart.`);
//     }
// }

// // Example usage:
// addToCart("Laptop", 2);
// addToCart("Mouse", 1);
// addToCart("Laptop", 3);  // Adding more laptops, quantity should increase

// // Display the current contents of the cart
// console.log("Current Cart Contents:");
// console.log(shoppingCart);
