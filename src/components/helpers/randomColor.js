const randomColor = (darkness) => { 
  const r = Math.random() * (255 - darkness),
        g = Math.random() * (255 - darkness),
        b = Math.random() * (255 - darkness);
  return `rgb(${r},${g},${b})`;
}

export default randomColor;