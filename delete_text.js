document.getElementById('delete-btn').addEventListener('click',function(){
    document.getElementById('delete-text').style.display='none';
})
document.getElementById('delete-confirm').addEventListener('focus',function(){
    document.body.style.backgroundColor='lightcoral';
})
document.getElementById('delete-confirm').addEventListener('blur',function(){
    document.body.style.backgroundColor='white';
})

/* // delete text
document.getElementById('delete-confirm').addEventListener('keyup',function(){
    const deleteInput= document.getElementById('delete-confirm');
  const deleteBtn= document.getElementById('delete-btn');
  if(deleteInput.value=='delete'){
    deleteBtn.removeAttribute('disabled');
  } else{deleteBtn.setAttribute('disabled',true);}
})*/
document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const deleteBtn=document.getElementById('delete-btn');
    if(event.target.value=='delete'){
        deleteBtn.removeAttribute('disabled');
    } else{deleteBtn.setAttribute('disabled',true);}
 
})