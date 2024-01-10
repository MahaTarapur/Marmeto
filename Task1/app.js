
    let deliveryLocations= [
      {
        "pincode": "110001",
        "estimatedDeliveryDays": 2,
        "locationName": "Connaught Place, Delhi"
      },
      {
        "pincode": "400001",
        "estimatedDeliveryDays": 3,
        "locationName": "Fort, Mumbai"
      },
      {
        "pincode": "700001",
        "estimatedDeliveryDays": 4,
        "locationName": "Dalhousie Square, Kolkata"
      },
      {
        "pincode": "600001",
        "estimatedDeliveryDays": 3,
        "locationName": "Parrys Corner, Chennai"
      },
      {
        "pincode": "500001",
        "estimatedDeliveryDays": 2,
        "locationName": "Afzal Gunj, Hyderabad"
      },
      {
        "pincode": "110020",
        "estimatedDeliveryDays": 5,
        "locationName": "Hauz Khas, Delhi"
      },
      {
        "pincode": "400020",
        "estimatedDeliveryDays": 4,
        "locationName": "Worli, Mumbai"
      },
      {
        "pincode": "700020",
        "estimatedDeliveryDays": 3,
        "locationName": "Salt Lake City, Kolkata"
      },
      {
        "pincode": "600020",
        "estimatedDeliveryDays": 2,
        "locationName": "Anna Nagar, Chennai"
      },
      {
        "pincode": "500020",
        "estimatedDeliveryDays": 4,
        "locationName": "Banjara Hills, Hyderabad"
      }
    ]

    let day=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
    let month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]


    class PincodeChecker extends HTMLElement
    {
        constructor()
        {
            super()
            this.input=this.querySelector('[name="pincode"]')
            this.button=this.querySelector('[name="button"]')
            this.message=this.querySelector('[name="message"]')

            this.button.addEventListener('click', this.checkPincode.bind(this));
            this.input.addEventListener('click',this.clearInput.bind(this))
        }

        clearInput()
        {
            this.input.value=""
            this.message.innerHTML=""
        }

        checkPincode()
            { 
                if(this.input.value.length === 6)
                {
                    for (let obj of deliveryLocations)
                    {
                        if(this.input.value==obj.pincode)
                        {
                            console.log("hi");
                            let days=obj.estimatedDeliveryDays
                            let date=new Date()
                            let newday=date.getDay()+days
                            let newdate=date.getDate()+days
                            let newmonth=date.getMonth()+days
                            let deliveryDay=day.at(newday)
                            let deliveryMonth=month.at(newmonth)

                            return this.message.innerHTML=`
                            <small>Estimated Delivery</small>
                            <br>
                            ${deliveryDay},${newdate} ${deliveryMonth}`
                        }
                        else
                        {
                            console.log("bye");
                            this.message.innerHTML=`
                            <small>Estimated Delivery</small>
                            <br>
                            <p>Enter valid pincode</p>`
                        }
                    }
                }
                else
                {
                    return this.message.innerHTML=`
                    <small>Estimated Delivery</small>
                    <br>
                    <p>Enter valid pincode</p>`
                }
            }
    }

    customElements.define('pincode-checker',PincodeChecker)



























//   let day=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
//   let month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]



//   function getDeliveryDetails()
//   {
//     let enteredpincode=input.value
//     deliveryLocations.map((item)=>
//     {
            // let days=item.estimatedDeliveryDays
            // let date=new Date()
            // let newday=date.getDay()+days
            // let newdate=date.getDate()+days
            // let newmonth=date.getMonth()+days


            // let deliveryDay=day.at(newday)
            // let deliveryMonth=month.at(newmonth)

//         console.log(enteredpincode);
//         console.log(item.pincode);
//         if (enteredpincode==item.pincode)
//         {
//             console.log("hi");
//             return details.innerHTML=`
//             <small>Estimated Delivery</small>
//             <br>
//             ${deliveryDay},${newdate} ${deliveryMonth}
//             `
           
//         }
//         else
//         {
//             console.log("bye");
//             return details.innerHTML=`
//             <small>Estimated Delivery</small>
//             <br>
//             Entervalid Pincode
//             `
//         }
//     })
//   }

  