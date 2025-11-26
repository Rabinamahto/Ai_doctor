// Simple SVG avatar generator returning a data URL.
// Creates a rounded rectangle with initials and a deterministic background color.
export function generateAvatar(name = 'User', size = 128) {
  const initials = name
    .split(' ')
    .map(s => s.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');

  // deterministic color from name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  const bg = `hsl(${hue} 70% 85%)`;
  const fg = `hsl(${hue} 30% 25%)`;

  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>
      <rect rx='18' ry='18' width='100%' height='100%' fill='${bg}' />
      <text x='50%' y='54%' text-anchor='middle' font-family='Inter, system-ui, Arial' font-size='${Math.round(
        size / 2.8
      )}' fill='${fg}' font-weight='700' dy='.035em'>${initials}</text>
    </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default generateAvatar;
