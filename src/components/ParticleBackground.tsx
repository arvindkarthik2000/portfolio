import { useEffect, useRef } from "react";

/**
 * CPU-Centric Grid + Signal Flow
 * - Particles flow toward central CPU points
 * - Signals follow grid paths but gravitate toward CPU nodes
 * - When near CPU, particles get absorbed with effect
 * - Theme-aware: reads <html data-theme="light">
 */
export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true })!;
    let raf = 0;

    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const dpr = () => Math.min(2, window.devicePixelRatio || 1);

    let W = 0;
    let H = 0;

    // ---- Tuning knobs ----
    const GRID = 60;
    const PACKET_MAX = 10;
    const SPAWN_INTERVAL_MS = 600;
    const SPEED_MIN = 1.2;
    const SPEED_MAX = 2.0;
    // Target position: header brand name (top-left)
    const BRAND_TARGET_X = 150; // pixels from left
    const BRAND_TARGET_Y = 32; // pixels from top (header height)
    const CPU_ATTRACTION_RADIUS = 400; // pixels within which to guide toward CPU
    const CPU_ABSORPTION_RADIUS = 40; // pixels at which particle is absorbed
    // -------------------------------------

    function isLightTheme() {
      return document.documentElement.getAttribute("data-theme") === "light";
    }

    function rand(min: number, max: number) {
      return min + Math.random() * (max - min);
    }

    function snap(v: number) {
      return Math.round(v / GRID) * GRID;
    }

    // ----- Packets -----
    type Dir = "L" | "R" | "U" | "D";
    type Packet = {
      x: number;
      y: number;
      dir: Dir;
      v: number;
      size: number;
      life: number;
      targetCPU: { x: number; y: number };
      nextTurnAt: number;
    };

    let packets: Packet[] = [];
    let lastSpawnAt = 0;

    // Get brand name target position
    function getBrandTarget() {
      return { x: BRAND_TARGET_X, y: BRAND_TARGET_Y };
    }

    function randomEdgeSpawn(): Packet {
      const side = Math.floor(Math.random() * 4);
      const margin = GRID;

      let x = 0, y = 0, dir: Dir = "R";

      if (side === 0) {
        x = -margin;
        y = snap(rand(margin, H - margin));
        dir = "R";
      } else if (side === 1) {
        x = W + margin;
        y = snap(rand(margin, H - margin));
        dir = "L";
      } else if (side === 2) {
        x = snap(rand(margin, W - margin));
        y = -margin;
        dir = "D";
      } else {
        x = snap(rand(margin, W - margin));
        y = H + margin;
        dir = "U";
      }

      return {
        x,
        y,
        dir,
        v: rand(SPEED_MIN, SPEED_MAX),
        size: rand(1.1, 1.9),
        life: Math.floor(rand(500, 900)),
        targetCPU: getBrandTarget(),
        nextTurnAt: Math.floor(rand(2, 6)) * GRID
      };
    }

    function spawnPacket(now: number) {
      if (reduced) return;
      if (packets.length >= PACKET_MAX) return;
      if (now - lastSpawnAt < SPAWN_INTERVAL_MS) return;

      packets.push(randomEdgeSpawn());
      lastSpawnAt = now;
    }

    // ----- Draw -----
    function drawGrid(light: boolean) {
      const stroke = light ? "rgba(2,6,23,0.04)" : "rgba(226,232,240,0.04)";
      const major = light ? "rgba(2,6,23,0.06)" : "rgba(226,232,240,0.06)";

      ctx.save();
      ctx.lineWidth = 1;

      ctx.strokeStyle = stroke;
      ctx.beginPath();
      for (let x = 0; x <= W; x += GRID) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, H);
      }
      for (let y = 0; y <= H; y += GRID) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(W, y + 0.5);
      }
      ctx.stroke();

      ctx.strokeStyle = major;
      ctx.beginPath();
      for (let x = 0; x <= W; x += GRID * 3) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, H);
      }
      for (let y = 0; y <= H; y += GRID * 3) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(W, y + 0.5);
      }
      ctx.stroke();

      ctx.restore();
    }

    function drawPackets(light: boolean) {
      const glow = light ? "rgba(37,99,235,0.18)" : "rgba(96,165,250,0.22)";
      const core = light ? "rgba(37,99,235,0.30)" : "rgba(96,165,250,0.35)";
      const tail = light ? "rgba(37,99,235,0.07)" : "rgba(96,165,250,0.09)";

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      for (const p of packets) {
        // Calculate distance to CPU for fade effect
        const dx = p.x - p.targetCPU.x;
        const dy = p.y - p.targetCPU.y;
        const distToCPU = Math.sqrt(dx * dx + dy * dy);
        const fadeStart = CPU_ABSORPTION_RADIUS * 2;
        
        let fadeAlpha = 1;
        if (distToCPU < fadeStart) {
          fadeAlpha = distToCPU / fadeStart;
        }

        // glow
        const rg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 10);
        rg.addColorStop(0, glow.replace(/[\d.]+\)$/, `${0.18 * fadeAlpha})`));
        rg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = rg;
        ctx.fillRect(p.x - p.size * 10, p.y - p.size * 10, p.size * 20, p.size * 20);

        // core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = core.replace(/[\d.]+\)$/, `${0.30 * fadeAlpha})`);
        ctx.fill();

        // tail (directional)
        let tdx = 0, tdy = 0;
        if (p.dir === "R") tdx = -1;
        if (p.dir === "L") tdx = 1;
        if (p.dir === "D") tdy = -1;
        if (p.dir === "U") tdy = 1;

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + tdx * 12, p.y + tdy * 12);
        ctx.strokeStyle = tail.replace(/[\d.]+\)$/, `${0.09 * fadeAlpha})`);
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();
    }

    // Smart direction choosing - prefer directions that move toward CPU
    function chooseBestDirection(p: Packet): Dir {
      const dx = p.targetCPU.x - p.x;
      const dy = p.targetCPU.y - p.y;
      const distToCPU = Math.sqrt(dx * dx + dy * dy);

      // If within attraction radius, guide toward CPU
      if (distToCPU < CPU_ATTRACTION_RADIUS) {
        const hori = p.dir === "L" || p.dir === "R";
        
        // Stronger guidance the closer we get
        const guidanceStrength = 1 - (distToCPU / CPU_ATTRACTION_RADIUS);
        
        if (hori) {
          // Currently moving horizontal, maybe turn vertical toward CPU
          if (Math.abs(dy) > GRID * 0.5) {
            // Need to move vertically
            if (Math.random() < 0.3 + guidanceStrength * 0.6) {
              return dy < 0 ? "U" : "D";
            }
          }
        } else {
          // Currently moving vertical, maybe turn horizontal toward CPU
          if (Math.abs(dx) > GRID * 0.5) {
            // Need to move horizontally
            if (Math.random() < 0.3 + guidanceStrength * 0.6) {
              return dx < 0 ? "L" : "R";
            }
          }
        }
      }

      // Default: keep current direction
      return p.dir;
    }

    // Turn logic: only at grid nodes
    function maybeTurn(p: Packet) {
      // if near a node
      const nearNode =
        Math.abs(p.x - snap(p.x)) < 0.7 && Math.abs(p.y - snap(p.y)) < 0.7;

      if (!nearNode) return;

      // only allow turning every N grids travelled
      p.nextTurnAt -= p.v;
      if (p.nextTurnAt > 0) return;

      const dx = p.targetCPU.x - p.x;
      const dy = p.targetCPU.y - p.y;
      const distToCPU = Math.sqrt(dx * dx + dy * dy);

      // Increase turn frequency near CPU
      let turnProb = 0.15;
      if (distToCPU < CPU_ATTRACTION_RADIUS) {
        turnProb = 0.25;
      }

      if (Math.random() < turnProb) {
        p.dir = chooseBestDirection(p);
      }

      p.nextTurnAt = Math.floor(rand(2, 6)) * GRID;
    }

    function updatePackets() {
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];

        // move orthogonally
        if (p.dir === "R") p.x += p.v;
        if (p.dir === "L") p.x -= p.v;
        if (p.dir === "D") p.y += p.v;
        if (p.dir === "U") p.y -= p.v;

        maybeTurn(p);

        p.life -= 1;

        // Check if absorbed by CPU
        const dx = p.x - p.targetCPU.x;
        const dy = p.y - p.targetCPU.y;
        const distToCPU = Math.sqrt(dx * dx + dy * dy);
        
        // remove if out of bounds, expired, or absorbed by CPU
        if (
          p.life <= 0 ||
          distToCPU < CPU_ABSORPTION_RADIUS ||
          p.x < -GRID * 3 ||
          p.x > W + GRID * 3 ||
          p.y < -GRID * 3 ||
          p.y > H + GRID * 3
        ) {
          packets.splice(i, 1);
        }
      }
    }

    function resize() {
      if (!canvas) return;
      
      W = window.innerWidth;
      H = window.innerHeight;

      const ratio = dpr();
      canvas.width = Math.floor(W * ratio);
      canvas.height = Math.floor(H * ratio);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      packets = [];
      lastSpawnAt = 0;
    }

    window.addEventListener("resize", resize);
    resize();

    function frame(now: number) {
      ctx.clearRect(0, 0, W, H);

      const light = isLightTheme();
      drawGrid(light);

      spawnPacket(now);
      updatePackets();
      drawPackets(light);

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.7,
        filter: "blur(0.5px)"
      }}
    />
  );
}
