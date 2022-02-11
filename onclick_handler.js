function makeColorGreen(){
    document.body.style.backgroundColor="green";
}

var ac= document.getElementById('yellow-color');
ac.addEventListener('click',myFunction);
function myFunction(){
    document.body.style.backgroundColor="yellow";
}



    var ac=document.getElementById('yellow-color');
    ac.addEventListener('click', abe);
    function abe(){
       document.body.style.backgroundColor="black";
    }

    var ac= document.getElementById('goldenrod-color');
    ac.onclick= myFunction;
    function myFunction(){
    document.body.style.backgroundColor="goldenrod";
    }

    //anonymous function
    document.getElementById('blue-color').addEventListener('click',function(){
        document.body.style.backgroundColor='blue';
    })

    