function initializeFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()} Cookie Banner Test Website</p>
    `;
} 