function a(){
    // console.log(b);
    c();
    function c() {
        console.log(b);
    }
}

var b = 10;

a();


