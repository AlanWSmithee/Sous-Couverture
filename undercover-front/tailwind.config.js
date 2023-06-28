/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      // --snip--
    },
    variants: {
      // --snip--
    },
    plugins: [
      // Initialize with default values (see options below)
      import("tailwindcss-radix")(),
    ],
  };