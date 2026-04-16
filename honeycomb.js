/**
 * honeycomb.js - Interactive Hex Grid Background
 */

const initHoneycomb = () => {
    const canvas = document.getElementById('honeycomb-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let hexSize = 35;
    let hexHeight = Math.sqrt(3) * hexSize;
    let hexWidth = 2 * hexSize;
    let columns, rows;
    
    let mouse = { x: -1000, y: -1000 };
    
    const resize = () => {
        const parent = canvas.parentElement;
        width = canvas.width = parent.clientWidth;
        height = canvas.height = parent.clientHeight;
        columns = Math.ceil(width / (hexSize * 1.5)) + 1;
        rows = Math.ceil(height / hexHeight) + 1;
    };

    const drawHexagon = (x, y, size, alpha = 0.1) => {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const px = x + size * Math.cos(angle);
            const py = y + size * Math.sin(angle);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        
        // Accent color from CSS variable
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00ffff';
        
        ctx.strokeStyle = accentColor;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = alpha > 0.2 ? 1.5 : 1; 
        ctx.stroke();
    };

    const render = () => {
        ctx.clearRect(0, 0, width, height);

        for (let c = 0; c < columns; c++) {
            for (let r = 0; r < rows; r++) {
                let x = c * hexSize * 1.5;
                let y = r * hexHeight;

                if (c % 2 !== 0) {
                    y += hexHeight / 2;
                }

                const dist = Math.hypot(x - mouse.x, y - mouse.y);
                let alpha = 0.15; // Increased from 0.05
                let size = hexSize;

                if (dist < 280) { // Slightly larger radius
                    alpha = 0.6 * (1 - dist / 280); // Increased interaction intensity
                    size = hexSize + 3 * (1 - dist / 280);
                }

                drawHexagon(x, y, size, alpha);
            }
        }
        requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('resize', resize);
    
    resize();
    render();
};

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHoneycomb);
} else {
    initHoneycomb();
}
