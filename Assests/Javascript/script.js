document.getElementById('yr').textContent=new Date().getFullYear();
(function(){
  var links=[].slice.call(document.querySelectorAll('nav a'));
  if(!('IntersectionObserver' in window)) return;
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id);});
      }
    });
  },{rootMargin:'-45% 0px -50% 0px'});
  ['about','skills','projects','contact'].forEach(function(id){io.observe(document.getElementById(id));});
})();