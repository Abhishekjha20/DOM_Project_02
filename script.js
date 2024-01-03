let con = document.querySelector('#container')
let love = document.querySelector('i')

con.addEventListener("dblclick", function(){
    // console.log("Hello");
    love.style.transform = 'scale(1) translate(-50%, -50%)'
    love.style.color = "red";
    love.style.opacity = 0.8;

    setTimeout(function (){
        love.style.opacity = 0
    },1000);

    setTimeout(function (){
        love.style.transform = 'scale(0) translate(-50%, -50%)'
    },2000);
})



