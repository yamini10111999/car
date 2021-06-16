 const btn=document.getElementById('button');
const ul=document.getElementById('ul');
const ptag=document.getElementById('ptag');
btn.addEventListener('click',function(e){
    function startgame(){
    if(ptag.innerHTML===""){
       const create=document.createElement('h2');
        create.textContent="Game Started";
        ptag.appendChild(create);
    }
    else{
        btn.value=="again-start";
        ul.innerHTML="";
    }
  }
    startgame();
     var petrolpumbs=[];
     do{
         const randomNum=Math.floor(Math.random()*100)+1;
         if( !petrolpumbs.includes(randomNum)){
             petrolpumbs.push(randomNum);
         }
     } while(petrolpumbs.length<5);
     console.log(petrolpumbs)

     const pump=document.createTextNode(`petrol pumbs generated are ${petrolpumbs}`);
     ul.appendChild(pump);

     var move=1;
     var rem=30;
     var position=0;
     do{
        var random=Math.floor(Math.random()*6+1);
        position=position+random;
        rem=rem-random;
        if ( petrolpumbs.includes(position) ){
          rem=rem+20;
          console.log(rem)
        }
        var output=`Move ${move} - Car at ${position}, petrol remaining ${rem<=0? '0':rem}`;
        var li=document.createElement('li');
        li.append(output);
        ul.appendChild(li);
        move++;

     } while(move<100  && rem>0) 

     if(rem>0){
         var li=document.createElement('h2');
         li.textContent="Reached"
         ul.appendChild(li);
         againstart();

     } else{
         var h2=document.createElement('h2');
         h2.textContent="GameOver"
         ul.appendChild(h2);
         againstart();
     }
    

});

function againstart(){
    btn.innerHTML="again Start Game"
    btn.style.visibility="visible";
    btn.value="Again Start";

}