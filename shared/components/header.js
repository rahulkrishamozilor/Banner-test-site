class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header style="
                background: var(--bg-color);
                padding: 20px;
                border-bottom: 1px solid rgba(255,255,255,0.1);
            ">
                <nav style="
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <div class="logo">
                        <a href="/" style="color: var(--text-color); text-decoration: none; font-size: 1.5rem;">
                            Fancy Crypto Exchange
                        </a>
                    </div>
                    <div class="nav-links">
                        <a href="/" style="color: var(--text-color); text-decoration: none; margin: 0 15px; padding: 8px 15px; border-radius: 5px; transition: background-color 0.3s;">Home</a>
                        <a href="/pages/about.html" style="color: var(--text-color); text-decoration: none; margin: 0 15px; padding: 8px 15px; border-radius: 5px; transition: background-color 0.3s;">About</a>
                        <a href="/pages/contact.html" style="color: var(--text-color); text-decoration: none; margin: 0 15px; padding: 8px 15px; border-radius: 5px; transition: background-color 0.3s;">Contact</a>
                    </div>
                </nav>
            </header>
        `;

        // Add hover effect
        const navLinks = this.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.backgroundColor = 'rgba(255,255,255,0.1)';
            });
            link.addEventListener('mouseout', () => {
                link.style.backgroundColor = 'transparent';
            });
        });
    }
}

// Define the custom element
customElements.define('header-component', Header);

function initializeHeader() {
    // The header will be initialized when the custom element is used
} 