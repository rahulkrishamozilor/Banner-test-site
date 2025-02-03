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
                    <a href="/" style="color: var(--text-color); text-decoration: none; font-weight: bold; font-size: 1.5rem;">
                        FANCY
                    </a>
                    <div class="nav-links" style="display: flex; gap: 30px;">
                        <a href="/" style="color: var(--text-color); text-decoration: none;">Home</a>
                        <a href="/pages/about.html" style="color: var(--text-color); text-decoration: none;">About</a>
                        <a href="/pages/contact.html" style="color: var(--text-color); text-decoration: none;">Contact</a>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', Header); 