const accordionItem = document.querySelectorAll('.accordion-item');
                             
const onClickAccordionHeader = e => {
  if (e.currentTarget.parentNode.classList.contains('active')) {
    e.currentTarget.parentNode.classList.remove("active");
  } else {
    Array.prototype.forEach.call(accordionItem, e => e.classList.remove('active'));
    e.currentTarget.parentNode.classList.add("active");
  }
};

const init = () => {
  Array.prototype.forEach.call(accordionItem, e => e.querySelector('.accordion-header').addEventListener('click', onClickAccordionHeader, false));
};

document.addEventListener('DOMContentLoaded', init);