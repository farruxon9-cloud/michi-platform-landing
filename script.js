// Add some simple interactivity for the mockup cards
document.addEventListener('DOMContentLoaded', () => {
    const applyBtns = document.querySelectorAll('.apply-btn');
    applyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const originalText = this.innerText;
            this.innerText = 'Applied ✓';
            this.style.background = '#27c93f';
            setTimeout(() => {
                this.innerText = originalText;
                this.style.background = 'var(--text-main)';
            }, 2000);
        });
    });
});
