window.onload=function(){
    var second=00;
    var tens=00;

    var tensResult=document.getElementById("tens");
    var secondsResult=document.getElementById("seconds");

    var btnstart=document.getElementById("btnstart");
    var btnstop=document.getElementById("btnstop");
    var btnreset=document.getElementById("btnreset");

    var interval;
    btnstart.onclick=function(){
        clearInterval(interval);
        interval=setInterval(startTimer,10);
    }
    btnstop.onclick=function(){
        clearInterval(interval);
    }
    btnreset.onclick=function(){
        clearInterval(interval);
        tens="00";
        second="00";
        tensResult.innerHTML=tens;
        secondsResult.innerHTML=second;
    }

    function startTimer(){
        tens++;
        if(tens<=9)
        {
            tensResult.innerHTML="0"+tens;
        }
        if(tens>9){
            tensResult.innerHTML=tens
        }
        if(tens>99){
            second++;
            secondsResult.innerHTML="0"+second;
            tens=0;
            tensResult.innerHTML="0"+tens
        }
    }


}