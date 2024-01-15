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

    products.find((p)=>
    {
        if(p.id==getSingleProduct.id)
        {
            console.log("p1");
            if(cart.length==0)
            {
                console.log("pl");
                return cart.push(p)
            }
            cart.find((cp)=>
                {
                    console.log(cp.id);
                    console.log(p.id);
                    console.log(getSingleProduct.id);
                    if(cp.id==getSingleProduct.id)
                    {
                        console.log("cp1");
                        return cp.quantity+=1
                    }
                })
            }
            else
            {
                console.log("cp2");
                return cart.push(p)
            }       
        }
    })
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