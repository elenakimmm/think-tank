export function Placeholder({ label, tone = 'light', ratio }) {
  const tones = {
    light: { bg: '#f4f4f4', stripe: '#e7e7e7', text: '#888' },
    dark: { bg: '#1a1a1a', stripe: '#252525', text: '#888' },
    warm: { bg: '#f6efe7', stripe: '#ede2d3', text: '#9a8c75' },
    sand: { bg: '#efece5', stripe: '#e3dfd3', text: '#8e8675' },
    lime: { bg: 'oklch(0.95 0.12 115)', stripe: 'oklch(0.92 0.18 115)', text: '#3a4a18' }
  };
  const t = tones[tone] || tones.light;
  const style = ratio ? { aspectRatio: ratio } : {};

  return (
    <div style={{
      width: '100%', height: '100%',
      background: `repeating-linear-gradient(135deg, ${t.bg} 0 16px, ${t.stripe} 16px 17px)`,
      display: 'grid', placeItems: 'center', position: 'relative', ...style
    }}>
      <div style={{
        position: 'absolute', bottom: 14, left: 14,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: t.text, background: t.bg, padding: '4px 8px'
      }}>
        {label}
      </div>
    </div>
  );
}
