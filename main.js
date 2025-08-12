// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Tabs logic (accessible)
const teaTab = document.getElementById('tab-tea');
const coffeeTab = document.getElementById('tab-coffee');
const teaPanel = document.getElementById('panel-tea');
const coffeePanel = document.getElementById('panel-coffee');

function selectTab(which){
  const isTea = which === 'tea';
  teaTab.setAttribute('aria-selected', isTea);
  coffeeTab.setAttribute('aria-selected', !isTea);
  teaPanel.hidden = !isTea;
  coffeePanel.hidden = isTea;
}

teaTab.addEventListener('click', ()=> selectTab('tea'));
coffeeTab.addEventListener('click', ()=> selectTab('coffee'));

// Newsletter mock handler
const form = document.getElementById('newsletter-form');
const msg = document.getElementById('newsletter-msg');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const email = this.email.value.trim();
  if(!email){ return; }
  msg.textContent = 'Thanks! We\\'ll be in touch soon.';
  this.reset();
});