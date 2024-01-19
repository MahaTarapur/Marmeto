

let ul=document.querySelector(".splide__list")

async function slide()
{
  let str = ``;
  let slidedata=await fetch("./sample.json")
  slidedata=await slidedata.json()
  console.log(slidedata[0].blocks);
  slidedata=slidedata[0].blocks
  slidedata.map((item)=>
  {
    str += `<li class="splide__slide">
    <img  src=${item.desktop_image_url} alt="">
    </li>
    `
  })  

  
  ul.innerHTML = str;
  const splide =new Splide( '.splide', {
    // type:'loop',
    height: '9rem',
    perPage: 1,
    width:"100%",
    arrows:false,
    breakpoints: {
      640: {
        height: '6rem',
      },
    },
  } );
splide.mount();
}


slide()