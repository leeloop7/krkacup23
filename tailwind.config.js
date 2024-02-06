module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    theme: {
        extend: {
            height: {
                80: "20rem",
                128: "32rem",
                144: "36rem",
                160: "40rem",
                192: "52rem",
                256: "64rem",
                288: "76rem",
                "screen/2": "50vh",
                "screen/3": "33vh",
                "screen/4": "25vh",
            },
            width: {
                128: "32rem",
                192: "48rem",
                256: "64rem",
            },
            spacing: {
                "screen/4": "25vh",
            },
            fontFamily: {
                heading: ["Kalam", "cursive"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
