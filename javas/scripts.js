function Mouseover(){
    document.getElementsByClassName('poza')[0].src = 'images/harta_alb_negru.png';
}

function Mouseout(){
    document.getElementsByClassName('poza')[0].src = 'images/harta.png';
}

function Mouseover2(){
    document.getElementsByClassName('poza2')[0].src = 'images/hartag_alb_negru.jpg';
}

function Mouseout2(){
    document.getElementsByClassName('poza2')[0].src = 'images/hartag.jpg';
}


function verificaUser() {
    var u = document.getElementById("user").value;
    if(!localStorage.getItem(u)) {
    alert("User incorect!")
    }
    else {
    var p = document.getElementById("pass").value;
    if(CryptoJS.MD5(p) == localStorage.getItem(u))
    confirm("OK");
    else
    alert("parola incorecta");
    }
    }
    
    function inscrieUser() {
    var un = document.getElementById("user").value;
    if(localStorage.getItem(un)) {
    alert("User existent!")
    }
    else {
    var pn = document.getElementById("pass").value;
    var hash = CryptoJS.MD5(pn);
    localStorage.setItem(un, hash);
    confirm("User inscris!");
    }
    }