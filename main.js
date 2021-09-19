document.querySelector('.burger').addEventListener('click', function(){
  document.querySelector('.burger span').classList.toggle('active');
  document.querySelector('.nav-list').classList.toggle('active');
})