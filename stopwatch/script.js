var a=00;
var b=00;
var c=00;
var d=00;
var hours=document.getElementById('hour');
var mins=document.getElementById('min');
var secs=document.getElementById('sec');
var mls=document.getElementById('mill');

var start=document.getElementById('start');
var buttonstop=document.getElementById('stop');
var reset=document.getElementById('reset');

var interval;

function starttime(){
     a++;
     if(a>9){
        mls.innerHTML=a;
     }
     if(a<9){
        mls.innerHTML="0"+a;
     }
     if(a>99){
        b++;
        secs.innerHTML="0"+b+":";
        a=0;
        mls.innerHTML="0"+a;
     }
     if(b>9){
        secs.innerHTML=b+":";
     }
     if(b<9){
        secs.innerHTML="0"+b+":";
     }
     if(b>59){
        c++;
        mins.innerHTML="0"+c+":";
        a=0;
        mls.innerHTML="0"+a;
        b=0;
        secs.innerHTML="0"+b+":";
     }
     if(c>9){
        mins.innerHTML=c+":";
     }
     if(c<9){
        mins.innerHTML="0"+c+":";
     }
     if(c>59){
        d++;
        hours.innerHTML="0"+d+":";
        a=0;
        mls.innerHTML="0"+a;
        b=0;
        secs.innerHTML="0"+b+":";
        c=0;
        mins.innerHTML="0"+c+":";
     }
     if(d>9){
        hours.innerHTML=d+":";
     }
     if(d<9){
        hours.innerHTML="0"+d+":";
     }
}

start.onclick= function(){
    interval= setInterval(starttime,10);
    start.disabled=true;
    buttonstop.disabled=false;
}

buttonstop.onclick= function(){
    clearInterval(interval);
    start.disabled=false;
    buttonstop.disabled=true;
}

reset.onclick= function(){
    clearInterval(interval);
    a=00;
    b=00;
    c=00;
    d=00;
    hours.innerHTML="00:";
    mins.innerHTML="00:";
    secs.innerHTML="00:";
    mls.innerHTML="00";
    start.disabled=false;
    buttonstop.disabled=false;
}