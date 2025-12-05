/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. **Content:** მნიშვნელოვანია, რომ Tailwind-მა იცოდეს, სად ეძებოს კლასები.
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 2. **Colors:** აქ ვამატებთ ჩვენს პერსონალურ ფერებს
      colors: {
        // --- META-ის მსგავსი ფერები (ღილაკებისთვის და ტექსტისთვის) ---
        'meta-blue': '#1877F2',       // ლურჯი ღილაკის ფონი
        'meta-blue-dark': '#166fe5',  // ლურჯი Hover-ის ეფექტი
        'text-muted': '#242526',      // რბილი შავი ტექსტისთვის

        // --- ოპტიმიზაციის დემოს ფერები (Highlighting) ---
        'bg-base': '#f9fafb',        // ზოგადი ფონი
        'render-flash': '#fde047',    // ყვითელი (Basic-ის რენდერზე ციმციმისთვის)
        'optimized-stable': '#dcfce7', // ღია მწვანე (Optimized-ის სტაბილური ფონი)
      },
      // შეგიძლიათ აქ დაამატოთ სხვა კონფიგურაციებიც (მაგ. ფონტები, ზომები)
    },
  },
  plugins: [],
}
