(() => {
 const phone = "966566366401";
 document.querySelectorAll(".wa-link").forEach((a) => {
   const service = a.dataset.service || "استفسار عام عن خدمات درب";
   const message = `السلام عليكم، جايكم من موقع درب وأرغب بالاستفسار عن: ${service}.\n\nنوع النشاط:\nتفاصيل الطلب:\nالموعد المتوقع:\n\nياليت توضحون لي السعر ومدة التنفيذ.`;
   a.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
   a.target = "_blank"; a.rel = "noopener noreferrer";
 });
 document.getElementById("year").textContent = new Date().getFullYear();
 const filters = document.querySelectorAll(".filter");
 const cards = document.querySelectorAll(".work-card");
 filters.forEach(btn => btn.addEventListener("click", () => {
   filters.forEach(b => b.classList.toggle("active", b === btn));
   cards.forEach(card => card.hidden = btn.dataset.filter !== "all" && card.dataset.category !== btn.dataset.filter);
 }));
})();