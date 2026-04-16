/**
 * backgrounds.js
 * Auto-injects interactive, cursor-reactive geometric backgrounds
 * into each portfolio section. Each section gets a unique shape.
 *
 * Sections → Shapes:
 *   #work      → Triangles
 *   #services  → Circles
 *   #about     → Rectangles
 *   #gallery   → Diamonds (rotated squares)
 *   #contact   → Stars
 *   #awards-overlay → Floating Dots
 */

const SECTION_CONFIGS = [
    {
        id: 'work',
        canvasId: 'bg-canvas-work',
        type: 'triangles',
        accentVar: '--accent'
    },
    {
        id: 'services',
        canvasId: 'bg-canvas-services',
        type: 'circles',
        accentVar: '--accent'
    },
    {
        id: 'about',
        canvasId: 'bg-canvas-about',
        type: 'rectangles',
        accentVar: '--accent'
    },
    {
        id: 'gallery',
        canvasId: 'bg-canvas-gallery',
        type: 'diamonds',
        accentVar: '--accent'
    },
    {
        id: 'contact',
        canvasId: 'bg-canvas-contact',
        type: 'stars',
        accentVar: '--accent'
    },
    {
        id: 'awards-overlay',
        canvasId: 'bg-canvas-awards',
        type: 'dots',
        accentVar: '--accent'
    }
];

const getAccentColor = () =>
    getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00ffff';

/* ──────────────────────────────────────────────
   Shape Renderers
────────────────────────────────────────────── */

const drawTriangle = (ctx, x, y, size, alpha) => {
    ctx.beginPath();
    ctx.moveTo(x, y - size);
    ctx.lineTo(x + size * 0.866, y + size * 0.5);
    ctx.lineTo(x - size * 0.866, y + size * 0.5);
    ctx.closePath();
    ctx.strokeStyle = getAccentColor();
    ctx.globalAlpha = alpha;
    ctx.lineWidth = alpha > 0.25 ? 1.5 : 1;
    ctx.stroke();
};

const drawCircle = (ctx, x, y, size, alpha) => {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.strokeStyle = getAccentColor();
    ctx.globalAlpha = alpha;
    ctx.lineWidth = alpha > 0.25 ? 1.5 : 1;
    ctx.stroke();
};

const drawRectangle = (ctx, x, y, size, alpha) => {
    ctx.strokeStyle = getAccentColor();
    ctx.globalAlpha = alpha;
    ctx.lineWidth = alpha > 0.25 ? 1.5 : 1;
    ctx.strokeRect(x - size * 0.7, y - size * 0.5, size * 1.4, size);
};

const drawDiamond = (ctx, x, y, size, alpha) => {
    ctx.beginPath();
    ctx.moveTo(x, y - size);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x - size, y);
    ctx.closePath();
    ctx.strokeStyle = getAccentColor();
    ctx.globalAlpha = alpha;
    ctx.lineWidth = alpha > 0.25 ? 1.5 : 1;
    ctx.stroke();
};

const drawStar = (ctx, x, y, size, alpha) => {
    const spikes = 5;
    const outerR = size;
    const innerR = size * 0.45;
    let rot = (Math.PI / 2) * 3;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(x, y - outerR);
    for (let i = 0; i < spikes; i++) {
        ctx.lineTo(
            x + Math.cos(rot) * outerR,
            y + Math.sin(rot) * outerR
        );
        rot += step;
        ctx.lineTo(
            x + Math.cos(rot) * innerR,
            y + Math.sin(rot) * innerR
        );
        rot += step;
    }
    ctx.lineTo(x, y - outerR);
    ctx.closePath();
    ctx.strokeStyle = getAccentColor();
    ctx.globalAlpha = alpha;
    ctx.lineWidth = alpha > 0.25 ? 1.5 : 1;
    ctx.stroke();
};

const drawDot = (ctx, x, y, size, alpha) => {
    ctx.beginPath();
    ctx.arc(x, y, size * 0.25, 0, Math.PI * 2);
    ctx.fillStyle = getAccentColor();
    ctx.globalAlpha = alpha;
    ctx.fill();
};

/* ──────────────────────────────────────────────
   Grid layout per type
────────────────────────────────────────────── */
const getGrid = (type, width, height) => {
    const points = [];
    let spacingX, spacingY;

    switch (type) {
        case 'triangles':
            spacingX = 90; spacingY = 80;
            for (let x = spacingX / 2; x < width + spacingX; x += spacingX)
                for (let y = spacingY / 2; y < height + spacingY; y += spacingY)
                    points.push({ x, y, size: 22 });
            break;
        case 'circles':
            spacingX = 80; spacingY = 80;
            for (let x = spacingX / 2; x < width + spacingX; x += spacingX)
                for (let y = spacingY / 2; y < height + spacingY; y += spacingY)
                    points.push({ x, y, size: 20 });
            break;
        case 'rectangles':
            spacingX = 110; spacingY = 70;
            for (let x = spacingX / 2; x < width + spacingX; x += spacingX)
                for (let y = spacingY / 2; y < height + spacingY; y += spacingY)
                    points.push({ x, y, size: 25 });
            break;
        case 'diamonds':
            spacingX = 85; spacingY = 85;
            for (let x = spacingX / 2; x < width + spacingX; x += spacingX)
                for (let y = spacingY / 2; y < height + spacingY; y += spacingY)
                    points.push({ x, y, size: 18 });
            break;
        case 'stars':
            spacingX = 95; spacingY = 90;
            for (let x = spacingX / 2; x < width + spacingX; x += spacingX)
                for (let y = spacingY / 2; y < height + spacingY; y += spacingY)
                    points.push({ x, y, size: 16 });
            break;
        case 'dots':
            spacingX = 50; spacingY = 50;
            for (let x = spacingX / 2; x < width + spacingX; x += spacingX)
                for (let y = spacingY / 2; y < height + spacingY; y += spacingY)
                    points.push({ x, y, size: 12 });
            break;
    }
    return points;
};

const drawShape = (type, ctx, x, y, size, alpha) => {
    switch (type) {
        case 'triangles':   drawTriangle(ctx, x, y, size, alpha); break;
        case 'circles':     drawCircle(ctx, x, y, size, alpha); break;
        case 'rectangles':  drawRectangle(ctx, x, y, size, alpha); break;
        case 'diamonds':    drawDiamond(ctx, x, y, size, alpha); break;
        case 'stars':       drawStar(ctx, x, y, size, alpha); break;
        case 'dots':        drawDot(ctx, x, y, size, alpha); break;
    }
};

/* ──────────────────────────────────────────────
   Bootstrap each section canvas
────────────────────────────────────────────── */
const initSectionCanvas = (config) => {
    const section = document.getElementById(config.id);
    if (!section) return;

    const canvas = document.createElement('canvas');
    canvas.id = config.canvasId;
    canvas.className = 'section-bg-canvas';
    section.insertBefore(canvas, section.firstChild);

    const ctx = canvas.getContext('2d');
    let width, height, grid;
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
        width = canvas.width = section.offsetWidth;
        height = canvas.height = section.offsetHeight;
        grid = getGrid(config.type, width, height);
    };

    const render = () => {
        ctx.clearRect(0, 0, width, height);
        if (!grid) return;

        for (const pt of grid) {
            const dist = Math.hypot(pt.x - mouse.x, pt.y - mouse.y);
            let alpha = 0.12;
            let size = pt.size;

            if (dist < 260) {
                const ratio = 1 - dist / 260;
                alpha = 0.12 + 0.55 * ratio;
                size = pt.size + 4 * ratio;
            }
            ctx.globalAlpha = alpha;
            drawShape(config.type, ctx, pt.x, pt.y, size, alpha);
        }
        requestAnimationFrame(render);
    };

    // Track mouse relative to canvas
    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('resize', () => {
        resize();
    });

    resize();
    render();
};

/* ──────────────────────────────────────────────
   Entry Point
────────────────────────────────────────────── */
const initAllBackgrounds = () => {
    SECTION_CONFIGS.forEach(initSectionCanvas);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllBackgrounds);
} else {
    initAllBackgrounds();
}
