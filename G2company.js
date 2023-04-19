function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}



// JavaScript for "Learn More" buttons
const learnMoreButtons = document.querySelectorAll('.learn-more');

learnMoreButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const section = event.target.closest('section');
    const content = section.querySelector('.content');
    const readMoreLink = section.querySelector('.read-more');
    
    content.classList.toggle('expanded');
    readMoreLink.textContent = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
});

// JavaScript for "Click Here" buttons
const clickHereButtons = document.querySelectorAll('.click-here');

clickHereButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Add your custom logic here for what should happen when the "Click Here" button is clicked
    // For example, you can redirect to another page, display a modal, or perform an action
    alert('You clicked the "Click Here" button!');
  });
});
