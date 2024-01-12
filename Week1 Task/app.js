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
                            <h6>${quantity}</h6>
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

    products.find((p)=>
    {
        if(p.id==getSingleProduct.id)
        {
            cart.push(p)
        }
    })

        // products.find((product)=>
        // {
        //     if(product.id==getSingleProduct.id)
        //     {
        //         cart.find((cartproduct)=>
        //         {
        //             if(cartproduct.id==getSingleProduct.id)
        //             {
        //                 cartproduct.quantity+=1
        //             }
        //             else
        //             {
        //                 cart.push(cartproduct)
        //             }
        //         })
        //     }
        //     else
        //     {
        //         return cart.push(product)
        //     }
        // })
    console.log(cart);
}