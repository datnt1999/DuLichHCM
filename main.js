// execute script after page load
window.onload = function travel_fn(){
    //toggle buttom
    let toggle = document.querySelector("#nav .toggle-btn")
    let collapse =document.querySelector("#nav .collapse")
    toggle.addEventListener('click',function(){
        collapse.classList.toggle('active')
        // console.log(toggle)
    })
    //mansonary js
    let grid = document.querySelector("#site-main .recent-work-area .images-flex")
    let msnry = new Masonry(grid,{
        itemSelector:".flex-item",
        gutter:100,
        fitWidth:true
})
}
