/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f97316',
                secondary: '#64748b',
                dark: '#0f172a',
                develobe: '#38B6FF',
            },
            screens: {
                '2xl': '1320px',
            },
            fontFamily: {
                quicksand: ['Quicksand', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],

    // colors: ({
    //     colors
    // }) => ({
    //     develobe: {
    //         500: "#38B6FF",
    //         900: "#004166",
    //     }
    // }),

    // fontFamily: {
    //     inter: ['Inter'],
    //     quicksand: ['Quicksand'],
    // }
}
