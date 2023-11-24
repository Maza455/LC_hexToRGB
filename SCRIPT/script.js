//Hex to RGB function
function hexToRGB(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

const hexColor = '#DD730C';
const rgbColor = hexToRGB(hexColor);
console.log(rgbColor);
  