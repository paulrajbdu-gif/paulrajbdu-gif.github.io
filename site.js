const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
menu?.addEventListener('click', () => {
 const open = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open);
});
document.addEventListener('keydown', event => {
 if(event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
  menu.setAttribute('aria-expanded','false'); navigation.classList.remove('open'); menu.focus();
 }
});
const form = document.querySelector('#enquiry-form');
if (form) {
 const selected = new URLSearchParams(location.search).get('product');
 if ([...form.elements.product.options].some(option => option.value === selected)) form.elements.product.value = selected;
 form.addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(form);
  const product = form.elements.product.selectedOptions[0].textContent;
  const subject = 'Dev Engineering enquiry — ' + product;
  const message = `Product / Service: ${product}\nName: ${fields.get('name')}\nPhone: ${fields.get('phone') || 'Not provided'}\nEmail: ${fields.get('email')}\n\nRequirements:\n${fields.get('message')}`;
  const status = document.querySelector('#form-status');
  if (event.submitter?.value === 'whatsapp') {
   window.open('https://wa.me/918110013555?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
   status.textContent = 'Continue in WhatsApp to review and send your message. If it did not open, use the WhatsApp link in the footer.';
  } else {
   location.href = 'mailto:sales@deveng.in?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);
   status.textContent = 'Review and send the draft in your email app. If no app opened, email sales@deveng.in or use WhatsApp. Your enquiry has not been sent by this website.';
  }
 });
}
