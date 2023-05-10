const selectfloor = document.getElementById('floors');
const selectroom = document.getElementById('rooms');
const form = document.getElementById('booking-form'); 
const clearbut = document.getElementById('clearbut');

function opt(select, min, max){
    for(i=min; i<max; i++){
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }
}
opt(selectfloor, 3, 28);
opt(selectroom, 1, 11);


form.addEventListener('submit', (e) => {  
  e.preventDefault()  
  const formData = new FormData(e.target)  
  const json = JSON.stringify(Object.fromEntries(formData));  
  console.log(json)  
});

clearbut.addEventListener('click', () => form.reset());