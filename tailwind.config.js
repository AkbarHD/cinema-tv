/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {},
    },
    plugins: [],

    colors: ({
        colors
    }) => ({
        develobe: {
            500: "#38B6FF",
            900: "#004166",
        }
    })
}
