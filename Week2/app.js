let content=document.querySelector(".content")
console.log(content);
let container=document.querySelector(".container")
console.log(container);

document.addEventListener( 'DOMContentLoaded', async function() 
{
  let productsdata=await fetch("./data.json")
  productsdata= await productsdata.json()
  productsdata=productsdata.blocks
    
  var splide = new Splide( '.splide',
    {
        pagination:false
    } )
    splide.on('move', function (newIndex) 
    {
      productsdata.find(item => 
      {
      console.log( newIndex);
        console.log(item.id);
        if(newIndex==item.id)
        {
          console.log("matched");
          content.innerHTML=`
          <h2>${item.heading_text}<br>
            <span class="subHeading">${item.sub_heading_text}</span>
          </h2>
          <p>${item.description}</p>
          <h1>${item.price}</h1>
          `
          container.style.background=`${item.background}`
        }  
      })
      
    })
    splide.mount();
  } )


  