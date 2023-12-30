let div=document.getElementById("main")
console.log(div);


function checkoutpage()
{
    console.log("chk");
    div.innerHTML=""
    div.innerHTML+=`
    <h1>Complete!</h1>

            <div class="steps">
                <div class="stepbox1">
                    <div class="slno1">
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <h5>Shopping cart</h5>
                </div>
                <div class="stepbox1">
                    <div class="slno1">
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <h5>Checkout Details</h5>
                </div>
                <div class="stepbox2">
                    <div class="slno2">
                        3
                    </div>
                    <h5>Order Complete</h5>
                </div>
            </div>

            <div class="detailsbox">
                <div class="db1">
                    <h3>ThankYou!🎉</h3>
                    <h2>Your order has been received</h2>
                </div>
                <div class="productimages">
                    <img src="./images/Paste image.png" alt="">
                    <div class="no">2</div>
                    <img src="./images/Paste image (1).png" alt="">
                    <div class="no">2</div>
                    <img src="./images/Image Placeholder.png" alt="">
                    <div class="no">1</div>
                </div>
                <div class="details">
                <div class="simp"><h3>Order code :</h3><p>#2343_98976</p></div>
                <div class="simp"><h3>Date :</h3><span>October 19,2023</span></div>
                <div class="simp"><h3>Total :</h3><span>$1,345.00</span></div>
                <div class="simp"><h3>Payment Method :</h3><span>Credit card</span></div>
                </div>
                <div class="btndiv">
                    <button>Purchase History</button>
                </div>
            </div>

    `
console.log(div);

}
