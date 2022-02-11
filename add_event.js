const addEvent=document.getElementById('add-event');
addEvent.addEventListener('click',function(){
  const p=document.getElementById('add-text');
p.innerText='set value';
})

//update add event with input

const addText=document.getElementById('update-event');
addText.addEventListener('click',function(){
   const p = document.getElementById('update-add-text');
    const textIput = document.getElementById('input-text');
    p.innerText=textIput.value;
    textIput.value='';

})

//comment add event with input

const cmnt=document.getElementById('event-cmnt');
cmnt.addEventListener('click',function(){
    const addTextCmnt=document.getElementById('add-comment');
    const p= document.createElement('p');
    p.innerText=addTextCmnt.value;
    const comntContiner=document.getElementById('cmnt-container');
    comntContiner.appendChild(p);
    addTextCmnt.value='';


})