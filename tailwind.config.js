/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'

  ],
  theme: {
    extend: {

      colors: {
        kirmizi:"#ED2727",
        beyazF7:"#F7F7F7",
        beyazE5:"#E5E5E5",
        lightgreen:"#52C41A",
        yesil:"#008000",
        strMavi:"#BBDCC7",
        b88:"#888888"
      },
      border:{
        beyazF7:"#F7F7F7",
        beyazE5:"#E5E5E5",
        beyazF3:"#F3F3F3",
        mavi:"#2126AB",
        bb1:"border bottom 1px",
        bt1:"border top 1px",
        b1:"border 1px"
      },
      backgroundColor:{
        kirmizi:"#ED2727",
        beyazF7:"#F7F7F7",
        beyazE5:"#E5E5E5",
        mavi:"#2126AB",
        strMavi:"#BBDCC7",
        darkblue:"#2126AB",
        beyazF3:"#F3F3F3"

      },
      width:{
        xl460:"460px",
        "587":"587px"

      },
      fontSize:{
        fs13:"13px",
        fs7:"7px",
        fs9:"9px",
        fs15:"15px",
        fs11:"11px",
        fs10:"10px"
      },
      borderColor:{
        kirmizi:"#ED2727",
        beyazF7:"#F7F7F7",
        beyazE5:"#E5E5E5",
        beyazF3:"#F3F3F3",
        lightgreen:"#52C41A",
        yesil:"#008000",
        strMavi:"#BBDCC7",
        b88:"#888888",
        koyumavi:"#2126AB"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
      
  ],
}
