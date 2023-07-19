const counter  = document.getElementById('counter');
const countbut = document.getElementById('pause');
let btn = document.getElementById('heart');
let mclick=0;
let countnum;
let numc = 1;

function counterrun(n){
   if(n > 0){
    //alert(numc + "is the number");
    counter.innerText = numc--;
    
} else{
       
    counter.innerText = numc++;
    
};
//document.getElementById("pause").addEventListener("click",counterinfo) 
//return numc;
mclick = 0;

set;

};


function counterinfo(){
   // alert(countbut.innerText)
    if(countbut.innerText == 'pause'){
        clearInterval(T);
      document.getElementById('minus').setAttribute("disabled","");
      document.getElementById('plus').setAttribute("disabled","");
      document.getElementById('heart').setAttribute("disabled","");  
        countbut.innerText = "resume";
       //counter.innerText = pausenum;
        //alert("yes");
    }
    else{
        //alert("nope");
        countbut.innerText = "pause";
      document.getElementById('minus').removeAttribute("disabled");
      document.getElementById('plus').removeAttribute("disabled");
      document.getElementById('heart').removeAttribute("disabled");
//setInterval(counterrun(pausenum),1000);
set();
    
    } ;
};

function reducecounter(){
    clearInterval(T);
  // alert(numc);
   //let rnum = numc -2;
   counter.innerText = numc--;
    //counterrun(1);
    set();
};
function addcounter(){
    clearInterval(T);
    counter.innerText = numc++;
    //counterrun(0);
    set();
};





function leavecomment(){
    //console.log("buttion function");
//documnet.getElementById("submit").setAttribute(onclick,)    
const div = document.getElementById("list");
const p = document.createElement('p');
const message = document.getElementById("comment-input");
//console.log(message.value);
p.append(document.createTextNode(message.value));
div.append(p);

};


document.getElementById("pause").addEventListener("click",counterinfo);
document.getElementById("minus").addEventListener("click",reducecounter);
document.getElementById("plus").addEventListener("click",addcounter);
document.getElementById("submit").addEventListener("click", (e)=>{e.preventDefault(); leavecomment()});
document.getElementById("heart").addEventListener("click",function(){mclick+= 1;
                                                                    //setTimeout(() => {mclick = 0; },1000);
                                                                    //console.log(mclick);
                                                                    //return mclick;
                                                                    addlike(numc,mclick);
                                                                
                                                                });

// good code with out creating the list
function addlike(b,c){
    const likelist = document.querySelector('ul');
    const li = document.createElement("li");
    const span = document.createElement("span");
       let cnum = b;
       //alert(cnum+ " innertext " + numc + " counter value");
        //clearInterval(T);
      
       if (numc == cnum){   
                
                console.log("first if " + c);
             li.setAttribute("data-num",numc); 
             li.appendChild(document.createTextNode(numc + " has been liked "));
             span.appendChild(document.createTextNode(c++));
             li.append(span);
             likelist.append(li);
             //mclick = 0;
    
        }else{
               console.log("second if");
            li.setAttribute("data-num",numc); 
             li.appendChild(document.createTextNode(numc + " has been liked "));
             span.appendChild(document.createTextNode(c));
             li.append(span);
             likelist.append(li);
             //set ();
        };
          
    
    };






function set(){T = setInterval(counterrun,1000);
//alert("start");

};
set();
//counterrun(numc);

