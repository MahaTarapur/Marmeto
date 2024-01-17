    // document.addEventListener('DOMContentLoaded', function () {
    //     var splide = new Splide('.splide', {
    //         // Configure Splide options as needed
    //         type       : 'fade',
    //         heightRatio: 0.5,
    //         // Add more options based on your requirements
    //     }).mount();
    // });


    let para=document.querySelectorAll(".content")
    let paraarray=Array.from(para)
    console.log(paraarray);
    let max=135;

    paraarray.map((para)=>
    {
        let original=para.textContent;

        if(original.length>max)
        {
            let limited=original.substring(0,max)+"...";
            para.textContent=limited
        }
    })


    function checkViewport() {
        if (window.innerWidth <= 1024) 
        {
           
            let para=document.querySelectorAll(".content")
            let paraarray=Array.from(para)
            console.log(paraarray);
            let max=200;

            paraarray.map((para)=>
            {
                let original=para.textContent;

                if(original.length>max)
                {
                    let limited=original.substring(0,max)+"...";
                    para.textContent=limited
                }
            })
        }
    }

    checkViewport();

    window.addEventListener('resize', checkViewport);
   