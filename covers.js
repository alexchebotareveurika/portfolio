(()=>{
  const covers=new Set(['amtek','dl-studio','dl-games','red-path','credo','global-digital','mens-club','myshyak','one-price-coffee','kids-pizza-academy']);
  window.PortfolioCovers={markup(id){
    if(!covers.has(id))return '';
    return `<div class="minimal-cover cover-${id}" aria-hidden="true"><img class="gallery-cover-image" src="assets/covers/${id}.webp" width="1000" height="600" alt="" decoding="async"></div>`;
  }};
})();
