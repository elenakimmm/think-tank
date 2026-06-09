/* global React, Stage, Sprite, useSprite, useTime, Easing, clamp */

/* ============================================================
   KINETIC HERO — Marketing Agency for scaling.
   Two-scene kinetic typography.
   White background, black Helvetica, neon yellow accent.
   ============================================================ */

const K = {
  bg: '#ffffff',
  ink: '#0a0a0a',
  accent: '#d4ff32',
  dim: 'rgba(10,10,10,0.45)',
  font: 'Helvetica, "Helvetica Neue", "Arial Black", Arial, sans-serif'
};

/* ============================================================
   Big word — scales / translates with mask-style entry
   ============================================================ */
function BigWord({
  text,
  x, y,
  size = 600,
  weight = 900,
  color = K.ink,
  letterSpacing = '-0.05em',
  align = 'left',
  start = 0,
  entryDur = 0.7,
  entryEase = Easing.easeOutCubic,
  fromY = 80,
  fromScale = 0.85,
  exitStart = Infinity,
  exitDur = 0.5,
  drift = null,
  zIndex = 1
}) {
  const { localTime } = useSprite();

  const tIn = clamp((localTime - start) / entryDur, 0, 1);
  const eIn = entryEase(tIn);

  let opacity = eIn;
  let dy = fromY * (1 - eIn);
  let scale = fromScale + (1 - fromScale) * eIn;

  if (localTime > exitStart) {
    const tOut = clamp((localTime - exitStart) / exitDur, 0, 1);
    const eOut = Easing.easeInCubic(tOut);
    opacity *= 1 - eOut;
    dy += -40 * eOut;
  }

  let driftX = 0, driftY = 0;
  if (drift && tIn >= 1 && localTime < exitStart) {
    const phase = (localTime - start - entryDur) * (drift.freq || 0.6);
    driftX = Math.sin(phase) * (drift.ampX || 0);
    driftY = Math.cos(phase * 1.3) * (drift.ampY || 0);
  }

  const xTransform = align === 'center' ? '-50%' :
                     align === 'right' ? '-100%' : '0';

  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      transform: `translate(${xTransform}, ${dy + driftY}px) translateX(${driftX}px) scale(${scale})`,
      transformOrigin: align === 'center' ? 'center' : align === 'right' ? 'right' : 'left',
      fontFamily: K.font,
      fontWeight: weight,
      fontSize: size,
      letterSpacing,
      lineHeight: 0.85,
      color,
      opacity,
      whiteSpace: 'nowrap',
      willChange: 'transform, opacity',
      zIndex,
      userSelect: 'none'
    }}>
      {text}
    </div>
  );
}

/* ============================================================
   Yellow block — animated width / pulse
   ============================================================ */
function YellowBlock({
  x, y, width, height,
  start = 0,
  entryDur = 0.55,
  entryEase = Easing.easeOutCubic,
  fromWidth = 0,
  align = 'left',
  exitStart = Infinity,
  exitDur = 0.5,
  pulse = false,
  zIndex = 0
}) {
  const { localTime } = useSprite();

  const tIn = clamp((localTime - start) / entryDur, 0, 1);
  const eIn = entryEase(tIn);

  let w = fromWidth + (width - fromWidth) * eIn;
  let opacity = clamp((localTime - start) / 0.15, 0, 1);

  if (localTime > exitStart) {
    const tOut = clamp((localTime - exitStart) / exitDur, 0, 1);
    opacity *= 1 - tOut;
  }

  let pulseScale = 1;
  if (pulse && tIn >= 1) {
    const phase = (localTime - start - entryDur) * 1.4;
    pulseScale = 1 + 0.018 * Math.sin(phase);
  }

  const xTransform = align === 'center' ? '-50%' :
                     align === 'right' ? '-100%' : '0';

  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      transform: `translateX(${xTransform}) scaleY(${pulseScale})`,
      transformOrigin: 'center',
      width: w,
      height,
      background: K.accent,
      opacity,
      zIndex,
      willChange: 'width, opacity, transform'
    }} />
  );
}

/* ============================================================
   Mono caption
   ============================================================ */
function Caption({ text, x, y, size = 14, start = 0, align = 'left', color = K.dim }) {
  const { localTime, duration } = useSprite();
  const tIn = clamp((localTime - start) / 0.5, 0, 1);
  const exitStart = duration - 0.4;
  let opacity = tIn;
  if (localTime > exitStart) {
    opacity *= 1 - clamp((localTime - exitStart) / 0.4, 0, 1);
  }
  const xTransform = align === 'center' ? '-50%' :
                     align === 'right' ? '-100%' : '0';
  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      transform: `translateX(${xTransform})`,
      fontFamily: K.font,
      fontSize: size,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color,
      opacity,
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }}>
      <span style={{
        display: 'inline-block',
        width: 36, height: 1,
        background: color,
        transform: `scaleX(${tIn})`,
        transformOrigin: 'left'
      }} />
      {text}
    </div>
  );
}

/* ============================================================
   SCENES — total 7 seconds
   ============================================================ */

/* ── Persistent center: 0 → 7s — "scaling" never remounts ─── */
function KScalingCore() {
  return (
    <Sprite start={0} end={7.0}>
      {/* Yellow block expands first */}
      <YellowBlock
        x={1300} y={440} width={820} height={205}
        align="center"
        start={0.2} entryDur={0.7}
      />

      {/* "scaling" pops in over the yellow */}
      <BigWord
        text="scaling"
        x={1300} y={450}
        size={280}
        align="center"
        start={0.7}
        entryDur={0.55}
        fromScale={0.6}
        fromY={30}
        zIndex={2}
      />
    </Sprite>
  );
}

/* ── Scene 02: 1.2 → 7s — full phrase emerges around "scaling" ── */
function K02_MarketingAgency() {
  return (
    <Sprite start={1.2} end={7.0}>
      {/* "Marketing Agency" — slides down from above */}
      <BigWord
        text="Marketing Agency"
        x={1300} y={270}
        size={128}
        weight={900}
        letterSpacing="-0.04em"
        align="center"
        start={0.35}
        entryDur={0.6}
        fromY={-100}
        fromScale={0.92}
        zIndex={2}
      />

      {/* "for" — slides in from left */}
      <BigWord
        text="for"
        x={850} y={498}
        size={128}
        weight={900}
        letterSpacing="-0.04em"
        align="right"
        start={0.85}
        entryDur={0.55}
        fromY={0}
        fromScale={0.85}
        zIndex={3}
      />

      {/* "business" — completes the single-line phrase */}
      <BigWord
        text="business"
        x={1745} y={502}
        size={112}
        weight={900}
        letterSpacing="-0.045em"
        align="left"
        start={1.25}
        entryDur={0.65}
        fromY={0}
        fromScale={0.9}
        zIndex={2}
      />
    </Sprite>
  );
}

/* ============================================================
   COMPOSITION
   ============================================================ */
function KineticHero() {
  return (
    <React.Fragment>
      <KScalingCore />
      <K02_MarketingAgency />
    </React.Fragment>
  );
}

window.KineticHero = KineticHero;
window.KINETIC = K;
