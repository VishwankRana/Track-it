export default {
    content: [
        "./index.html",
        "./src/frontend/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                englishViolet: "#403D58",
                coral: "#FC7753",
                tiffanyBlue: "#66D7D1",
                englishViolet: "#403D58",
                straw: "#DBD56E",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
