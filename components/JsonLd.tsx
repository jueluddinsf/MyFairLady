export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CleaningService",
        "name": "My Fair Lady Cleaning",
        "image": "https://a-us.storyblok.com/f/1015833/x/343270e060/hero-real.png",
        "description": "Professional residential, Airbnb turnover, and commercial cleaning services in Pocono Lake, PA. Licensed & insured (Harborway).",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Pocono Lake",
            "addressRegion": "PA",
            "postalCode": "18347",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.1074,
            "longitude": -75.4674
        },
        "url": "https://myfairladycleaning.com",
        "telephone": "+15707701863",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            }
        ],
        "areaServed": [
            "Pocono Lake",
            "Blakeslee",
            "Jack Frost",
            "Big Boulder",
            "Lake Harmony",
            "Albrightsville"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
