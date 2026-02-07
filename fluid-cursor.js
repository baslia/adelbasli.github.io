class FluidCursor {
    constructor() {
        // Create canvas element
        this.canvas = document.createElement('canvas');
        this.canvas.width = 100;
        this.canvas.height = 100;
        this.canvas.style.position = 'fixed';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        this.canvas.style.display = 'block';
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');

        // Cursor position
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;

        // Target position for smooth following
        this.targetX = this.x;
        this.targetY = this.y;

        // Size tracking
        this.baseSize = 12;
        this.currentSize = this.baseSize;
        this.targetSize = this.baseSize;

        // Movement tracking
        this.velocity = 0;

        // Bind event handlers
        this.onMouseMove = this.onMouseMove.bind(this);
        this.animate = this.animate.bind(this);

        console.log('FluidCursor initialized');
        this.init();
    }

    init() {
        // Draw initial cursor
        this.draw();

        // Add event listeners
        document.addEventListener('mousemove', this.onMouseMove);

        // Start animation loop
        this.animate();
    }

    onMouseMove(e) {
        this.targetX = e.clientX;
        this.targetY = e.clientY;

        // Calculate velocity for size change
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        this.velocity = Math.sqrt(dx * dx + dy * dy);

        // Set target size based on velocity
        this.targetSize = this.baseSize + (this.velocity * 0.5);
    }

    animate() {
        // Smooth follow with easing
        this.x += (this.targetX - this.x) * 0.2;
        this.y += (this.targetY - this.y) * 0.2;

        // Smooth size transitions
        this.currentSize += (this.targetSize - this.currentSize) * 0.15;

        // Decay target size back to base
        this.targetSize += (this.baseSize - this.targetSize) * 0.08;

        this.draw();
        requestAnimationFrame(this.animate);
    }

    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;

        // Draw outer glow (larger, more transparent)
        this.ctx.fillStyle = 'rgba(102, 17, 203, 0.1)';
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, this.currentSize + 15, 0, Math.PI * 2);
        this.ctx.fill();

        // Draw middle ring
        this.ctx.strokeStyle = 'rgba(102, 17, 203, 0.25)';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, this.currentSize + 8, 0, Math.PI * 2);
        this.ctx.stroke();

        // Draw main cursor circle
        this.ctx.fillStyle = 'rgba(102, 17, 203, 0.9)';
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, this.currentSize, 0, Math.PI * 2);
        this.ctx.fill();

        // Draw white center dot
        this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, this.currentSize * 0.4, 0, Math.PI * 2);
        this.ctx.fill();

        // Update canvas position to follow cursor
        // Position canvas so its center follows the cursor
        const offsetX = this.canvas.width / 2;
        const offsetY = this.canvas.height / 2;
        this.canvas.style.left = (this.x - offsetX) + 'px';
        this.canvas.style.top = (this.y - offsetY) + 'px';
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded - initializing FluidCursor');
        new FluidCursor();
    });
} else {
    console.log('DOM already loaded - initializing FluidCursor');
    new FluidCursor();
}

