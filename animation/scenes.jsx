/* global React, Stage, Sprite, useSprite, useTime, TextSprite, Easing, interpolate, animate, clamp */

/* ============================================================
   THE COSMIC SCALE
   A sprite-based animation about the sizes & distances of
   celestial bodies — riffing on the word "scaling" from the
   hero copy "Marketing Agency for Scaling Business."
   Monochrome, Helvetica.
   ============================================================ */

const COSMIC = {
  bg: '#0a0a0a',
  fg: '#f6f4ef',
  dim: 'rgba(246,244,239,0.45)',
  faint: 'rgba(246,244,239,0.15)',
  font: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
  mono: '"Helvetica Neue", Helvetica, Arial, sans-serif'
};

/* ============================================================
   Circle (celestial body) with entry animation
   ============================================================ */
function Circle({
  x, y,
  size,
  fill = COSMIC.fg,
  stroke = null,
  strokeWidth = 1,
  entryDur = 0.6,
  exitDur = 0.4,
  entryEase = Easing.easeOutCubic,
  startScale = 0,
  endScale = 1,
  opacity: opacityOverride
}) {
  const { localTime, duration } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);

  let opacity = 1;
  let scale = endScale;

  if (localTime < entryDur) {
    const t = entryEase(clamp(localTime / entryDur, 0, 1));
    opacity = clamp(localTime / entryDur, 0, 1);
    scale = startScale + (endScale - startScale) * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInCubic(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = endScale * (1 - 0.06 * t);
  }

  if (opacityOverride != null) opacity *= opacityOverride;

  return (
    <div style={{
      position: 'absolute',
      left: x - size / 2,
      top: y - size / 2,
      width: size,
      height: size,
      borderRadius: '50%',
      background: fill,
      border: stroke ? `${strokeWidth}px solid ${stroke}` : 'none',
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      willChange: 'transform, opacity'
    }} />
  );
}

/* ============================================================
   Ring (hollow circle) — useful for light expansion, orbits
   ============================================================ */
function Ring({
  x, y,
  size,
  thickness = 2,
  color = COSMIC.fg,
  entryDur = 0.4,
  exitDur = 0.4,
  startSize = 0,
  opacity: opacityOverride
}) {
  const { localTime, duration } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);

  let opacity = 1;
  let actual = size;

  if (localTime < entryDur) {
    const t = Easing.easeOutCubic(clamp(localTime / entryDur, 0, 1));
    opacity = clamp(localTime / entryDur, 0, 1);
    actual = startSize + (size - startSize) * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInCubic(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
  }

  if (opacityOverride != null) opacity *= opacityOverride;

  return (
    <div style={{
      position: 'absolute',
      left: x - actual / 2,
      top: y - actual / 2,
      width: actual,
      height: actual,
      borderRadius: '50%',
      border: `${thickness}px solid ${color}`,
      opacity,
      willChange: 'width, height, opacity'
    }} />
  );
}

/* ============================================================
   Stagger text — each word fades+slides up with a delay
   ============================================================ */
function StaggerWords({
  words,
  x, y,
  size = 80,
  weight = 700,
  letterSpacing = '-0.03em',
  align = 'left',
  staggerStart = 0,
  staggerStep = 0.08,
  entryDur = 0.5,
  color = COSMIC.fg,
  lineHeight = 1.0,
  block = false
}) {
  const { localTime, duration } = useSprite();
  const exitStart = duration - 0.4;

  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      transform: align === 'center' ? 'translateX(-50%)'
              : align === 'right' ? 'translateX(-100%)' : 'none',
      display: block ? 'block' : 'flex',
      gap: block ? 0 : '0.25em',
      flexWrap: 'wrap',
      fontFamily: COSMIC.font,
      fontWeight: weight,
      fontSize: size,
      letterSpacing,
      lineHeight,
      color,
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }}>
      {words.map((w, i) => {
        const enterAt = staggerStart + i * staggerStep;
        let opacity = 0;
        let ty = 24;

        if (localTime >= enterAt) {
          const t = Easing.easeOutCubic(clamp((localTime - enterAt) / entryDur, 0, 1));
          opacity = t;
          ty = (1 - t) * 24;
        }
        if (localTime > exitStart) {
          const t = clamp((localTime - exitStart) / 0.4, 0, 1);
          opacity *= 1 - t;
          ty -= t * 8;
        }

        return (
          <span key={i} style={{
            display: 'inline-block',
            opacity,
            transform: `translateY(${ty}px)`,
            transition: 'none',
            marginRight: block ? 0 : undefined
          }}>
            {w}
          </span>
        );
      })}
    </div>
  );
}

/* ============================================================
   Mono label / hairline accent
   ============================================================ */
function MonoLabel({ text, x, y, size = 14, align = 'left', delay = 0, color = COSMIC.dim }) {
  const { localTime, duration } = useSprite();
  const exitStart = duration - 0.4;

  let opacity = 0;
  let cw = 0;

  if (localTime >= delay) {
    const t = clamp((localTime - delay) / 0.5, 0, 1);
    opacity = t;
    cw = t;
  }
  if (localTime > exitStart) {
    const t = clamp((localTime - exitStart) / 0.4, 0, 1);
    opacity *= 1 - t;
  }

  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      transform: align === 'center' ? 'translateX(-50%)'
              : align === 'right' ? 'translateX(-100%)' : 'none',
      fontFamily: COSMIC.font,
      fontSize: size,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      opacity
    }}>
      <span style={{
        display: 'inline-block',
        width: 40,
        height: 1,
        background: color,
        transform: `scaleX(${cw})`,
        transformOrigin: 'left'
      }} />
      {text}
    </div>
  );
}

/* ============================================================
   Counter — animates a number rolling up to its value
   ============================================================ */
function Counter({ to, x, y, size = 240, suffix = '', prefix = '', delay = 0, dur = 1.4, align = 'left' }) {
  const { localTime, duration } = useSprite();
  const exitStart = duration - 0.4;

  let value = 0;
  let opacity = 0;
  let ty = 24;

  if (localTime >= delay) {
    const tIn = clamp((localTime - delay) / 0.4, 0, 1);
    opacity = tIn;
    ty = (1 - tIn) * 24;

    const t = Easing.easeOutCubic(clamp((localTime - delay) / dur, 0, 1));
    value = to * t;
  }
  if (localTime > exitStart) {
    const t = clamp((localTime - exitStart) / 0.4, 0, 1);
    opacity *= 1 - t;
  }

  const formatted = value >= 1_000_000_000
    ? (value / 1_000_000_000).toFixed(value < 10_000_000_000 ? 1 : 0)
    : value >= 1_000_000
    ? (value / 1_000_000).toFixed(value < 10_000_000 ? 1 : 0)
    : value >= 1000
    ? Math.round(value).toLocaleString('en-US')
    : Math.round(value).toString();

  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      transform: align === 'center' ? `translate(-50%, ${ty}px)`
              : align === 'right' ? `translate(-100%, ${ty}px)`
              : `translateY(${ty}px)`,
      fontFamily: COSMIC.font,
      fontSize: size,
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 0.9,
      color: COSMIC.fg,
      fontVariantNumeric: 'tabular-nums',
      opacity,
      whiteSpace: 'nowrap'
    }}>
      {prefix}{formatted}{suffix}
    </div>
  );
}

/* ============================================================
   Star field — sparse dots for cosmic feel
   ============================================================ */
function StarField() {
  // Deterministic stars
  const stars = React.useMemo(() => {
    const arr = [];
    let seed = 17;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let i = 0; i < 60; i++) {
      arr.push({
        x: rand() * 1920,
        y: rand() * 1080,
        size: 1 + rand() * 2.2,
        op: 0.12 + rand() * 0.35
      });
    }
    return arr;
  }, []);

  const time = useTime();

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {stars.map((s, i) => {
        const twinkle = 0.7 + 0.3 * Math.sin(time * 1.4 + i * 0.6);
        return (
          <div key={i} style={{
            position: 'absolute',
            left: s.x, top: s.y,
            width: s.size, height: s.size,
            borderRadius: '50%',
            background: COSMIC.fg,
            opacity: s.op * twinkle
          }} />
        );
      })}
    </div>
  );
}

/* ============================================================
   Scenes
   ============================================================ */

/* ── Scene 01: Title ── 0 → 3.5s ─────────────────────────── */
function S01_Title() {
  return (
    <Sprite start={0} end={3.5}>
      <MonoLabel text="A short film about scale" x={120} y={120} size={16} delay={0.2} />

      <StaggerWords
        words={['SCALE.']}
        x={120} y={400}
        size={400}
        weight={900}
        letterSpacing="-0.05em"
        staggerStart={0.3}
        entryDur={0.7}
      />

      <Sprite start={0.8} end={3.5}>
        <Circle x={1640} y={540} size={22} fill={COSMIC.fg} entryDur={0.6} />
      </Sprite>

      <MonoLabel text="01 / 09 — pretext" x={120} y={960} size={14} delay={1.2} />
    </Sprite>
  );
}

/* ── Scene 02: Earth (1× baseline) ── 3.5 → 8s ───────────── */
function S02_Earth() {
  return (
    <Sprite start={3.5} end={8.0}>
      <MonoLabel text="02 / earth" x={120} y={120} size={14} delay={0.1} />

      <Circle x={960} y={540} size={120} entryDur={0.5} />

      <StaggerWords
        words={['EARTH']}
        x={960} y={680}
        size={84}
        align="center"
        staggerStart={0.4}
        weight={800}
      />

      <Counter to={12742} x={960} y={800} size={42} suffix=" KM WIDE" delay={0.7} dur={0.9} align="center" />

      <MonoLabel text="The reference. 1× scale." x={120} y={960} size={14} delay={0.6} />
    </Sprite>
  );
}

/* ── Scene 03: The Sun ── 8 → 13s ────────────────────────── */
function S03_Sun() {
  return (
    <Sprite start={8.0} end={13.0}>
      <MonoLabel text="03 / the sun" x={120} y={120} size={14} delay={0.1} />

      {/* Earth dot for reference (small) */}
      <Circle x={1700} y={540} size={12} entryDur={0.4} />
      <Sprite start={0.6} end={5.0}>
        <div style={{
          position: 'absolute', left: 1640, top: 580,
          fontFamily: COSMIC.font, fontSize: 14,
          color: COSMIC.dim, letterSpacing: '0.16em', textTransform: 'uppercase'
        }}>
          Earth (1×)
        </div>
      </Sprite>

      {/* The Sun — much larger circle, anchored left */}
      <Sprite start={0.2} end={5.0}>
        <Circle x={400} y={540} size={680} entryDur={0.9} entryEase={Easing.easeOutCubic} />
      </Sprite>

      <StaggerWords
        words={['THE', 'SUN', 'IS']}
        x={820} y={300}
        size={68}
        staggerStart={1.0}
        staggerStep={0.1}
        weight={700}
      />
      <Counter to={109} x={820} y={400} size={260} suffix="×" delay={1.5} dur={0.9} />
      <StaggerWords
        words={['WIDER', 'THAN', 'EARTH']}
        x={820} y={690}
        size={68}
        staggerStart={2.0}
        staggerStep={0.1}
        weight={700}
      />

      <MonoLabel text="1,392,700 km across — a yellow dwarf" x={120} y={960} size={14} delay={2.6} />
    </Sprite>
  );
}

/* ── Scene 04: Jupiter ── 13 → 18s ───────────────────────── */
function S04_Jupiter() {
  return (
    <Sprite start={13.0} end={18.0}>
      <MonoLabel text="04 / jupiter" x={120} y={120} size={14} delay={0.1} />

      {/* Grid of small dots — each represents Earth */}
      <Sprite start={0.3} end={5.0}>
        <DotGrid />
      </Sprite>

      <StaggerWords
        words={['1,321']}
        x={1200} y={340}
        size={220}
        weight={900}
        staggerStart={0.6}
        letterSpacing="-0.04em"
      />
      <StaggerWords
        words={['EARTHS', 'FIT', 'INSIDE']}
        x={1200} y={580}
        size={56}
        weight={700}
        staggerStart={1.4}
        staggerStep={0.1}
      />
      <StaggerWords
        words={['JUPITER']}
        x={1200} y={680}
        size={84}
        weight={800}
        staggerStart={1.9}
        letterSpacing="-0.035em"
      />

      <MonoLabel text="139,820 km diameter — gas giant" x={120} y={960} size={14} delay={2.4} />
    </Sprite>
  );
}

function DotGrid() {
  const { localTime } = useSprite();
  const cols = 22;
  const rows = 18;
  const cells = cols * rows;
  const cellSize = 24;
  const gap = 6;
  const totalW = cols * (cellSize + gap) - gap;
  const totalH = rows * (cellSize + gap) - gap;
  const ox = 240;
  const oy = (1080 - totalH) / 2;

  // Big circle outline that wraps the grid
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* outline circle */}
      <div style={{
        position: 'absolute',
        left: ox + totalW / 2 - 360,
        top: oy + totalH / 2 - 360,
        width: 720, height: 720,
        border: `2px solid ${COSMIC.fg}`,
        borderRadius: '50%',
        opacity: clamp((localTime - 0.1) / 0.5, 0, 1)
      }} />
      {Array.from({ length: cells }).map((_, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        const cx = ox + c * (cellSize + gap) + cellSize / 2;
        const cy = oy + r * (cellSize + gap) + cellSize / 2;
        // Mask: only show dots inside a circle
        const dx = cx - (ox + totalW / 2);
        const dy = cy - (oy + totalH / 2);
        const inside = Math.sqrt(dx * dx + dy * dy) < 340;
        if (!inside) return null;
        const stagger = 0.4 + (i / cells) * 1.4;
        const op = clamp((localTime - stagger) / 0.3, 0, 1) * 0.85;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: cx - cellSize / 2,
            top: cy - cellSize / 2,
            width: cellSize, height: cellSize,
            borderRadius: '50%',
            background: COSMIC.fg,
            opacity: op
          }} />
        );
      })}
    </div>
  );
}

/* ── Scene 05: Light speed ── 18 → 23s ───────────────────── */
function S05_Light() {
  const { localTime } = useSprite();
  return (
    <Sprite start={18.0} end={23.0}>
      <MonoLabel text="05 / the speed of light" x={120} y={120} size={14} delay={0.1} />

      {/* Center dot = Sun */}
      <Circle x={300} y={540} size={80} entryDur={0.4} />
      <div style={{
        position: 'absolute', left: 270, top: 640,
        fontFamily: COSMIC.font, fontSize: 16,
        color: COSMIC.dim, letterSpacing: '0.16em', textTransform: 'uppercase'
      }}>
        Sun
      </div>

      {/* Earth small dot */}
      <Sprite start={0.3} end={5.0}>
        <Circle x={1500} y={540} size={18} entryDur={0.4} />
        <div style={{
          position: 'absolute', left: 1474, top: 580,
          fontFamily: COSMIC.font, fontSize: 16,
          color: COSMIC.dim, letterSpacing: '0.16em', textTransform: 'uppercase'
        }}>
          Earth
        </div>
      </Sprite>

      {/* Expanding photon ring */}
      <LightWave start={0.8} />
      <LightWave start={1.6} />
      <LightWave start={2.4} />

      <StaggerWords
        words={['LIGHT', 'TAKES']}
        x={400} y={170}
        size={56}
        staggerStart={2.6}
        staggerStep={0.1}
      />
      <Counter to={500} x={400} y={250} size={200} suffix=" SECONDS" delay={3.0} dur={0.7} />
      <StaggerWords
        words={['TO', 'CROSS', 'THIS', 'GAP']}
        x={400} y={460}
        size={42}
        weight={500}
        staggerStart={3.6}
        staggerStep={0.07}
        letterSpacing="-0.01em"
      />

      <MonoLabel text="299,792 km/s — and still finite" x={120} y={960} size={14} delay={3.9} />
    </Sprite>
  );
}

function LightWave({ start }) {
  const { localTime, duration } = useSprite();
  const t = localTime - start;
  if (t < 0 || t > 3) return null;
  const progress = t / 3;
  const size = 60 + progress * 2200;
  const opacity = (1 - progress) * 0.7;
  return (
    <div style={{
      position: 'absolute',
      left: 300 - size / 2,
      top: 540 - size / 2,
      width: size, height: size,
      borderRadius: '50%',
      border: `1px solid ${COSMIC.fg}`,
      opacity
    }} />
  );
}

/* ── Scene 06: Voyager ── 23 → 28s ───────────────────────── */
function S06_Voyager() {
  const { localTime } = useSprite();

  // Voyager drifts further right over the scene
  const drift = Easing.easeInOutCubic(clamp((localTime - 0.5) / 3.5, 0, 1));
  const vx = 380 + drift * 1200;

  return (
    <Sprite start={23.0} end={28.0}>
      <MonoLabel text="06 / voyager 1" x={120} y={120} size={14} delay={0.1} />

      {/* Sun / inner system reference */}
      <Circle x={300} y={540} size={36} entryDur={0.4} />
      <div style={{
        position: 'absolute', left: 240, top: 590,
        fontFamily: COSMIC.font, fontSize: 14,
        color: COSMIC.dim, letterSpacing: '0.16em', textTransform: 'uppercase'
      }}>
        Solar system
      </div>

      {/* Outer ring of solar system */}
      <Ring x={300} y={540} size={420} thickness={1} color={COSMIC.faint} entryDur={0.4} />

      {/* Voyager dot */}
      <div style={{
        position: 'absolute',
        left: vx - 6, top: 534,
        width: 12, height: 12,
        borderRadius: '50%',
        background: COSMIC.fg,
        opacity: clamp((localTime - 0.3) / 0.4, 0, 1)
      }} />

      {/* Trail */}
      <div style={{
        position: 'absolute',
        left: 300, top: 539,
        width: vx - 300, height: 2,
        background: `linear-gradient(90deg, transparent 0%, ${COSMIC.faint} 100%)`,
        opacity: clamp((localTime - 0.4) / 0.5, 0, 1)
      }} />

      <StaggerWords
        words={['VOYAGER', '1']}
        x={1200} y={260}
        size={92}
        staggerStart={0.6}
        weight={800}
        align="center"
      />
      <Counter to={24} x={1200} y={400} size={240} suffix=" BILLION KM" delay={1.2} dur={1.0} align="center" />
      <StaggerWords
        words={['FROM', 'HOME']}
        x={1200} y={680}
        size={48}
        weight={500}
        staggerStart={1.8}
        staggerStep={0.08}
        letterSpacing="-0.01em"
        align="center"
      />

      <MonoLabel text="Launched 1977. Still going." x={120} y={960} size={14} delay={2.4} />
    </Sprite>
  );
}

/* ── Scene 07: Proxima Centauri ── 28 → 33s ──────────────── */
function S07_Proxima() {
  return (
    <Sprite start={28.0} end={33.0}>
      <MonoLabel text="07 / proxima centauri — our nearest star" x={120} y={120} size={14} delay={0.1} />

      {/* Sun left */}
      <Circle x={260} y={540} size={50} entryDur={0.5} />
      <div style={{
        position: 'absolute', left: 220, top: 600,
        fontFamily: COSMIC.font, fontSize: 14,
        color: COSMIC.dim, letterSpacing: '0.16em', textTransform: 'uppercase'
      }}>
        The Sun
      </div>

      {/* Proxima right */}
      <Sprite start={0.6} end={5.0}>
        <Circle x={1660} y={540} size={32} entryDur={0.5} fill="#f6f4ef" />
        <div style={{
          position: 'absolute', left: 1580, top: 600,
          fontFamily: COSMIC.font, fontSize: 14,
          color: COSMIC.dim, letterSpacing: '0.16em', textTransform: 'uppercase'
        }}>
          Proxima Centauri
        </div>
      </Sprite>

      {/* Long dashed gap line */}
      <DashedGap start={1.2} y={540} x1={310} x2={1640} />

      <StaggerWords
        words={['4.24']}
        x={960} y={290}
        size={240}
        weight={900}
        staggerStart={1.4}
        align="center"
        letterSpacing="-0.04em"
      />
      <StaggerWords
        words={['LIGHT-YEARS']}
        x={960} y={520}
        size={48}
        weight={500}
        staggerStart={2.0}
        align="center"
        letterSpacing="-0.005em"
      />

      <MonoLabel text="40,208,000,000,000 kilometres" x={960} y={960} size={14} delay={2.8} align="center" />
    </Sprite>
  );
}

function DashedGap({ start, y, x1, x2 }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - start) / 0.8, 0, 1);
  const w = (x2 - x1) * Easing.easeOutCubic(t);
  return (
    <div style={{
      position: 'absolute',
      left: x1, top: y - 1,
      width: w, height: 2,
      backgroundImage: `repeating-linear-gradient(90deg, ${COSMIC.faint} 0 8px, transparent 8px 16px)`,
      backgroundSize: '16px 2px'
    }} />
  );
}

/* ── Scene 08: Milky Way ── 33 → 38s ─────────────────────── */
function S08_MilkyWay() {
  return (
    <Sprite start={33.0} end={38.0}>
      <MonoLabel text="08 / milky way" x={120} y={120} size={14} delay={0.1} />

      <Spiral x={960} y={580} start={0.2} />

      <StaggerWords
        words={['100,000']}
        x={120} y={230}
        size={180}
        weight={900}
        staggerStart={0.9}
        letterSpacing="-0.04em"
      />
      <StaggerWords
        words={['LIGHT-YEARS', 'ACROSS']}
        x={120} y={420}
        size={48}
        weight={500}
        staggerStart={1.4}
        staggerStep={0.1}
      />

      <div style={{
        position: 'absolute',
        right: 120, top: 230,
        textAlign: 'right',
        fontFamily: COSMIC.font,
        color: COSMIC.fg,
        opacity: 1
      }}>
        <DotsAppearing />
      </div>

      <MonoLabel text="200 billion stars. Our home galaxy." x={120} y={960} size={14} delay={2.0} />
    </Sprite>
  );
}

function DotsAppearing() {
  const { localTime } = useSprite();
  const op1 = clamp((localTime - 1.6) / 0.4, 0, 1);
  const op2 = clamp((localTime - 1.9) / 0.4, 0, 1);
  return (
    <div style={{ textAlign: 'right' }}>
      <div style={{
        fontSize: 56, fontWeight: 800,
        letterSpacing: '-0.03em', opacity: op1,
        fontVariantNumeric: 'tabular-nums'
      }}>
        200B
      </div>
      <div style={{
        fontSize: 18, fontWeight: 500,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: COSMIC.dim, opacity: op2, marginTop: 12
      }}>
        Stars
      </div>
    </div>
  );
}

function Spiral({ x, y, start }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - start) / 2.0, 0, 1);
  const time = useTime();
  // 240 dots in a spiral
  const dots = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < 240; i++) {
      const angle = i * 0.32;
      const r = 6 + i * 1.7;
      arr.push({ angle, r, idx: i });
    }
    return arr;
  }, []);

  const rotation = (time - 33) * 0.05;

  return (
    <div style={{ position: 'absolute', left: 0, top: 0 }}>
      {dots.map((d) => {
        const stagger = (d.idx / dots.length) * 1.0;
        const op = clamp((localTime - start - stagger) / 0.4, 0, 1);
        const cx = x + Math.cos(d.angle + rotation) * d.r;
        const cy = y + Math.sin(d.angle + rotation) * d.r * 0.45;
        const size = 3 + (d.idx < 30 ? 4 : 0);
        return (
          <div key={d.idx} style={{
            position: 'absolute',
            left: cx - size / 2,
            top: cy - size / 2,
            width: size, height: size,
            borderRadius: '50%',
            background: COSMIC.fg,
            opacity: op * (0.5 + 0.5 * (1 - d.idx / 300))
          }} />
        );
      })}
    </div>
  );
}

/* ── Scene 09: Andromeda ── 38 → 43s ─────────────────────── */
function S09_Andromeda() {
  return (
    <Sprite start={38.0} end={43.0}>
      <MonoLabel text="09 / andromeda — on collision course" x={120} y={120} size={14} delay={0.1} />

      <Spiral x={500} y={540} start={0.2} />
      <Sprite start={0.4} end={5.0}>
        <SpiralB x={1440} y={540} />
      </Sprite>

      <StaggerWords
        words={['2.5', 'MILLION']}
        x={960} y={230}
        size={132}
        weight={900}
        staggerStart={0.8}
        staggerStep={0.12}
        align="center"
        letterSpacing="-0.04em"
      />
      <StaggerWords
        words={['LIGHT-YEARS', 'AWAY']}
        x={960} y={380}
        size={48}
        weight={500}
        staggerStart={1.4}
        staggerStep={0.1}
        align="center"
      />

      <MonoLabel text="Closing at 110 km/s — meeting in 4.5 billion years" x={960} y={960} size={14} delay={2.4} align="center" />
    </Sprite>
  );
}

function SpiralB({ x, y }) {
  const { localTime } = useSprite();
  const time = useTime();
  const dots = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      const angle = -i * 0.32;
      const r = 6 + i * 1.6;
      arr.push({ angle, r, idx: i });
    }
    return arr;
  }, []);
  const rotation = (time - 38) * -0.06;

  return (
    <div style={{ position: 'absolute', left: 0, top: 0 }}>
      {dots.map((d) => {
        const stagger = (d.idx / dots.length) * 0.8;
        const op = clamp((localTime - stagger) / 0.4, 0, 1);
        const cx = x + Math.cos(d.angle + rotation) * d.r;
        const cy = y + Math.sin(d.angle + rotation) * d.r * 0.45;
        const size = 3 + (d.idx < 30 ? 4 : 0);
        return (
          <div key={d.idx} style={{
            position: 'absolute',
            left: cx - size / 2,
            top: cy - size / 2,
            width: size, height: size,
            borderRadius: '50%',
            background: COSMIC.fg,
            opacity: op * (0.5 + 0.5 * (1 - d.idx / 260))
          }} />
        );
      })}
    </div>
  );
}

/* ── Scene 10: Outro — tie back to hero copy ── 43 → 48s ── */
function S10_Outro() {
  return (
    <Sprite start={43.0} end={48.0}>
      <MonoLabel text="end / fin" x={120} y={120} size={14} delay={0.1} />

      <StaggerWords
        words={['SCALE', 'IS', 'A', 'MATTER']}
        x={120} y={340}
        size={140}
        weight={900}
        staggerStart={0.3}
        staggerStep={0.1}
        letterSpacing="-0.045em"
      />
      <StaggerWords
        words={['OF', 'PERSPECTIVE.']}
        x={120} y={500}
        size={140}
        weight={900}
        staggerStart={0.8}
        staggerStep={0.1}
        letterSpacing="-0.045em"
      />

      {/* Subtle dot fading in next to the text */}
      <Sprite start={1.6} end={5.0}>
        <Circle x={1700} y={420} size={120} entryDur={1.0} />
      </Sprite>

      <div style={{
        position: 'absolute',
        left: 120, top: 800,
        fontFamily: COSMIC.font,
        fontSize: 22,
        fontWeight: 500,
        color: COSMIC.dim,
        letterSpacing: '-0.005em',
        opacity: 0,
        animation: 'cosmicFadeIn 0.6s ease 2.3s forwards'
      }}>
        Marketing Agency for <span style={{ color: COSMIC.fg, fontWeight: 700 }}>Scaling</span> Business.
      </div>

      <MonoLabel text="Think Tank Consulting" x={120} y={960} size={14} delay={3.0} />
    </Sprite>
  );
}

/* ============================================================
   Scene composition
   ============================================================ */
function CosmicScale() {
  return (
    <React.Fragment>
      <StarField />
      <S01_Title />
      <S02_Earth />
      <S03_Sun />
      <S04_Jupiter />
      <S05_Light />
      <S06_Voyager />
      <S07_Proxima />
      <S08_MilkyWay />
      <S09_Andromeda />
      <S10_Outro />
    </React.Fragment>
  );
}

window.CosmicScale = CosmicScale;
window.COSMIC = COSMIC;
