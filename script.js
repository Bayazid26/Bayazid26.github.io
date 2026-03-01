const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click",()=>{
 sidebar.classList.toggle("active");
});

/* Fade animation */
const faders = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){
   entry.target.classList.add('show');
  }
 });
},{threshold:0.2});

faders.forEach(f=>observer.observe(f));