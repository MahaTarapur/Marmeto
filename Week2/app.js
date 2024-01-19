let slide=document.querySelector(".content")
console.log(slide);
let container=document.querySelector(".container")
console.log(container);
let activeslide=document.getElementsByClassName("is-active")
console.log(activeslide);
let newslide=document.querySelector(".splide__slide")
console.log(newslide);


let pc=document.querySelector(".product_carousel")
console.log(pc);

document.addEventListener( 'DOMContentLoaded', async function() 
{

    let productsdata=await fetch("./data.json")
    productsdata= await productsdata.json()
    productsdata=productsdata.blocks
    productsdata.map((singleslide)=>
    {
        pc.innerHTML=`
        <div class="content">
        <h2>${singleslide.heading_text}<br>
        <span class="subHeading">${singleslide.sub_heading_text}Gold Luxury,</span>
        </h2>
        <p>${singleslide.description}</p>
        <h1>${singleslide.price}</h1>
        </div>
            <section class="splide" aria-label="Splide Basic HTML Example">
                <div class="splide__track">
                      <ul class="splide__list">
                          <li id="slide1" class="splide__slide">
                            <img src="./Images/Group 4.png" alt="">
                          </li>
                          <li id="slide2" class="splide__slide">
                            <img src="./Images/Group 5.png" alt="">
                          </li>
                          <li id="slide3" class="splide__slide">
                            <img src="./Images/Group 6.png" alt="">
                          </li>
                          <li id="slide4" class="splide__slide">
                            <img src="./Images/Group 7.png" alt="">
                          </li>
                      </ul>
                </div>
            </section>
        `
        container.style.background=`${singleslide.background}`
    })
    var splide = new Splide( '.splide',
    {
        pagination:false
    } );
    splide.mount();
  } );


  
// $(document).ready(function(){
//     $('.slider').slick({
//         // Slick options and settings
//         // Check Slick documentation for customization: https://slick-carousel.com/docs/
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         adaptiveHeight: true
//     });

//     // Event listener for slide change
//     $('.slider').on('afterChange', function(event, slick, currentSlide){
//         // Log the index of the current slide
//         console.log('Active Slide Index:', currentSlide);
        
//         // Get information about the active slide
//         var activeSlide = $('.slider').slick('slickCurrentSlide');
//         console.log('Active Slide Information:', $('.slider').slick('slickGetOption', 'slides')[activeSlide]);
//     });
// });