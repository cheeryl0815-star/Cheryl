window.addEventListener("load",()=>{const loader=document.getElementById("loader");setTimeout(()=>loader.classList.add("is-hidden"),650)});
const revealTargets=document.querySelectorAll(".section__head, .about__text, .about__visual, .skill-card, .work-card, .contact__inner");
revealTargets.forEach(el=>el.classList.add("reveal"));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}})},{threshold:.15});
revealTargets.forEach(el=>observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener("click",e=>{const target=document.querySelector(link.getAttribute("href"));if(!target)return;e.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"})})});
