'use strict'
const modal= document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnClosemodal=document.querySelector('.close-modal');
const btnsOpenmodal=document.querySelectorAll('.show-modal');

const openModel=function
		(){
			alert('jj');
			modal.classList.remove('hidden');
			overlay.classList.remove('hidden');

		}
 const closeModal = function(){
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
    };
for (let i=0;i<btnsOpenmodal.length;i++)
	btnsOpenmodal[i].addEventListener('click',openModel);
   
    btnClosemodal.addEventListener('click',closeModal);
     overlay.addEventListener('click',closeModal);


     document.addEventListener('keydown',function(e) {
     	console.log(e.key);

     	 if(e.key==='Escape' && !modal.classList.contains('hidden')){
     	 	closeModal();
     	 }
     });
  