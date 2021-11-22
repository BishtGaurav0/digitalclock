let digitalClock = () => {

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amorpm  =document.getElementById("amorpm");

    if(hours >12){
        amorpm.innerHTML="PM";
        hours = hours - 12 ;
    }else{
            amorpm.innerHTML="AM";
    }
    
    




    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    setTimeout(digitalClock, 1000);

} 
digitalClock();


const settime=()=> {
    let i=document.getElementById('img2').value;
    let j=document.getElementById("image4").value;
    let k=document.getElementById("image6").value;
    let hourr = new Date().getHours();
    if( i == hourr){
        
        document.getElementById("child4").style.backgroundImage="url(./image/wakeupimage.png)";
        document.getElementById("head").innerText="Lets Have Some Breakfast";
    }else if(j== hourr){
        document.getElementById("child4").style.backgroundImage="url(./image/lunchimage.png)";
        document.getElementById("head").innerText="Lets Have Some Lunch";
    }else if(k== hourr){
        document.getElementById("child4").style.backgroundImage="url(./image/goodnight.png)";
        document.getElementById("head").innerText="Go for Nap";
    }else{
        document.getElementById("child4").style.backgroundImage="url(./image/Clock(1).png)";
        document.getElementById("head").innerText="Default";
    }
}




const  Makediv=()=>{
    var container=document.createElement('div');
    container.id="div5";

    
    document.getElementById("parent").appendChild(container);
    var invalue=document.getElementById('img2');
   var value=invalue.options[invalue.selectedIndex].text;
   document.getElementById('div5').innerHTML="  wake up time   "+ value;
   
   var invalue1=document.getElementById('image4');
  var value1=invalue1.options[invalue1.selectedIndex].text;
 document.getElementById('div5').innerHTML="  lunch time is    "+ value1;
    
   var invalue2=document.getElementById('image6');
   var value2=invalue2.options[invalue2.selectedIndex].text;
   document.getElementById('div5').innerText="  wake up time   "+ value +"\n" + "  lunch time  is  "+ value1 + "\n" +  "  Nap  time is  "+ value2;
}





















    

 




















