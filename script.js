const b=document.querySelector('.menu-btn'),n=document.querySelector('.nav');b?.addEventListener('click',()=>n.classList.toggle('open'));document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>o.observe(el));

// Modal das técnicas
(() => {
  const modal = document.getElementById('techModal');
  if (!modal) return;
  const title = document.getElementById('techModalTitle');
  const desc = document.getElementById('techModalDescription');
  const whatsapp = document.getElementById('techModalWhatsapp');
  const basePhone = '5521970057817';

  function openModal(button){
    const tech = button.dataset.tech || '';
    const description = button.dataset.desc || '';
    title.textContent = tech;
    desc.textContent = description;
    const message = `Olá, gostaria de agendar uma consulta e saber mais sobre ${tech}!`;
    whatsapp.href = `https://wa.me/${basePhone}?text=${encodeURIComponent(message)}`;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
  }
  function closeModal(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
  }

  document.querySelectorAll('.tech-pill').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn));
  });
  modal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();
