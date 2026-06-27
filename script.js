document.querySelectorAll('.social a').forEach(btn => {

btn.addEventListener('mouseenter', () => {
btn.style.transform = 'scale(1.03)';
});

btn.addEventListener('mouseleave', () => {
btn.style.transform = 'scale(1)';
});

});
