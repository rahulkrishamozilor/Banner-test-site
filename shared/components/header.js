class Header extends HTMLElement {
    connectedCallback() {
        console.log('Header component connected');
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
                        <a href="index.html" style="color: var(--text-color); text-decoration: none; margin: 0 15px; padding: 8px 15px; border-radius: 5px; transition: background-color 0.3s;">Home</a>
                        <a href="pages/about.html" style="color: var(--text-color); text-decoration: none; margin: 0 15px; padding: 8px 15px; border-radius: 5px; transition: background-color 0.3s;">About</a>
                        <a href="pages/contact.html" style="color: var(--text-color); text-decoration: none; margin: 0 15px; padding: 8px 15px; border-radius: 5px; transition: background-color 0.3s;">Contact</a>
                        <a onclick="pushPurchaseEvent()" style="color: var(--text-color); text-decoration: none; margin: 0 15px; padding: 8px 15px; border-radius: 5px; transition: background-color 0.3s;">Purchase</a>

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
try {
    customElements.define('header-component', Header);
    console.log('Header component registered successfully');
} catch (error) {
    console.error('Error registering header component:', error);
}

function initializeHeader() {
    // The header will be initialized when the custom element is used
} 