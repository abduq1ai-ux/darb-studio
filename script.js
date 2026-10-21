(() => {
"use strict";
const phone="966566366401", defaultService="استفسار عام عن خدمات درب";
document.querySelectorAll(".wa-link").forEach(link=>{
 const service=link.dataset.service||defaultService;
 const message=`السلام عليكم، جايكم من موقع درب وأرغب بالاستفسار عن: ${service}.\n\nنوع النشاط:\nتفاصيل الطلب:\nالميزانية التقريبية (اختياري):\nالموعد المتوقع:\n\nياليت توضحون لي السعر ومدة التنفيذ.`;
 link.href=`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;link.target="_blank";link.rel="noopener noreferrer";
});
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
const filters=[...document.querySelectorAll(".filter")],cards=[...document.querySelectorAll(".work-card")],count=document.querySelector(".filter[data-filter='all'] span");
filters.forEach(button=>button.addEventListener("click",()=>{
 filters.forEach(item=>{const active=item===button;item.classList.toggle("active",active);item.setAttribute("aria-pressed",String(active));});
 let visible=0;cards.forEach(card=>{const show=button.dataset.filter==="all"||card.dataset.category===button.dataset.filter;card.hidden=!show;if(show)visible++;});if(count)count.textContent=visible;
}));
const sticky=document.querySelector(".sticky-mobile-cta");if(sticky){const update=()=>sticky.classList.toggle("is-visible",window.scrollY>360);window.addEventListener("scroll",update,{passive:true});update();}
})();