// Google Analytics 4. The measurement ID is public: it is in every page's HTML anyway.
// The tag loads only after the visitor allows it in the consent banner (src/components/ConsentBanner.astro).
export const gaMeasurementId = 'G-LEDL7J8DT3';

// Cloudflare Web Analytics. Cookieless and without cross-site tracking, so it loads without consent.
// The token is public too: it is in every page's HTML.
export const cfBeaconToken = '2189219ca3994c7c80418224c630395f';
