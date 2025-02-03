class CookieManager {
    static setupCookies() {
        document.cookie = "site_pref=dark_mode; path=/;";
        document.cookie = "session_id=123456789; path=/;";
        document.cookie = "analytics_opt_in=true; path=/;";
    }
}

function setupCookies() {
    CookieManager.setupCookies();
} 