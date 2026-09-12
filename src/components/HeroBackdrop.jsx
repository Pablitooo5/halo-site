/**
 * Fond du hero : une planche-contact. Les cadres se révèlent lentement,
 * en décalé, comme des tirages qui sortent du bain.
 * Volontairement à la limite du visible, et masqué du côté du texte.
 */
const COLS = 10;
const ROWS = 6;
const W = 90;
const H = 68;
const GAP = 10;

export default function HeroBackdrop() {
  const frames = [];
  for (let r = 0; r < ROWS; r += 1) {
    for (let c = 0; c < COLS; c += 1) frames.push({ r, c, i: r * COLS + c });
  }

  return (
    <div className="sheet" aria-hidden="true">
      <svg
        viewBox={`0 0 ${COLS * (W + GAP)} ${ROWS * (H + GAP)}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="sheet-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4F93FE" stopOpacity="0.5" />
            <stop offset="1" stopColor="#F5B01E" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        {frames.map(({ r, c, i }) => (
          <g key={i}>
            <rect
              x={c * (W + GAP)}
              y={r * (H + GAP)}
              width={W}
              height={H}
              fill="none"
              stroke="#0f2a5c"
              strokeOpacity="0.06"
              strokeWidth="1"
            />
            {/* un cadre sur trois « se développe » */}
            {(i * 7) % 3 === 0 && (
              <rect
                className="sheet-frame"
                x={c * (W + GAP)}
                y={r * (H + GAP)}
                width={W}
                height={H}
                fill="url(#sheet-fill)"
                style={{ animationDelay: `${((i * 3) % 11) * 1.5}s` }}
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
