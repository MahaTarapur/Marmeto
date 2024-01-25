let products;
let productsdiv=document.querySelector(".productsdiv")
let cartproductsdiv=document.querySelector(".cartproductsdiv")

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
                        <button onclick="addProduct(${id})" class="btn">
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
function addProduct(e)
{
console.log(e);

let finditem=products.find((item)=>
{
    if(item.id==e)
    return item
})
let cartitem=cart.find((item)=>
{
    if(item.id==e)
    return item
})
console.log(finditem);
console.log(cartitem);
if(finditem.id==e && cartitem?.id==undefined)
{
    console.log("hi");
    cart.push(finditem)
    console.log(cart);
    addCartData()
}
else
{
    console.log("bye");
    cartitem.quantity+=1
    console.log(cart);
    addCartData()
}
}


async function addCartData()
{

    try
    {
        cartproductsdiv.innerHTML=""
        console.log(cart);
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
                        <h3>${quantity}</h3>
                        </div>
                    </div>
                </div>
            `
        console.log(cart);
        displayTotal()
        })
    }
    catch(err)
    {
        console.log(err.message);
    }

}

let total=document.querySelector(".total")
console.log(total);

function displayTotal()
{
    let totalPrice=[]
    let grandTotal;
    cart.map((item)=>
    {
        totalPrice.push((item.quantity)*(item.price))
    })
    grandTotal=totalPrice.reduce((price)=>
    {
        return price
    })
    total.innerHTML=`<h1>${grandTotal}</h1>`
}