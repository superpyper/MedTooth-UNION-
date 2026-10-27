document.querySelectorAll('.tab').forEach(function(b){b.addEventListener('click',function(){
document.querySelectorAll('.tab').forEach(function(t){t.setAttribute('aria-selected',t===b?'true':'false')});
document.querySelectorAll('.panel').forEach(function(p){p.hidden=p.id!=='panel-'+b.dataset.tab});});});

(function(){
  var header=document.querySelector('header');
  var btn=document.querySelector('.burger');
  if(!header||!btn) return;
  btn.setAttribute('aria-expanded','false');
  btn.addEventListener('click',function(){
    var open=header.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
  header.querySelectorAll('.nav a').forEach(function(a){
    a.addEventListener('click',function(){header.classList.remove('menu-open');btn.setAttribute('aria-expanded','false');});
  });
})();
