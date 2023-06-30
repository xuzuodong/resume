import { type Config } from 'tailwindcss'

export default {
    darkMode: ['class', '[class~=\'dark\']'],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config
