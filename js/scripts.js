const shadow = document.querySelector('.js-shadow');
const navigation = document.querySelector('.js-navigation');
const close = document.querySelector('.js-close');
const open = document.querySelector('.js-open');

open.addEventListener('click', event => {
  event.preventDefault();
  shadow.classList.add('navigation-shadow-visible');
  navigation.classList.add('navigation-visible');
});

shadow.addEventListener('click', closeNavigation.bind(this));
close.addEventListener('click', closeNavigation.bind(this));
navigation.addEventListener('click', event => event.stopPropagation());

function closeNavigation (event) {
  event.preventDefault();
  shadow.classList.remove('navigation-shadow-visible');
  navigation.classList.remove('navigation-visible');
}
