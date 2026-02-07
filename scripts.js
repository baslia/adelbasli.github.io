// Custom Smoke Trail Cursor Implementation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing smoke cursor...');

    const canvas = document.getElementById('canvas');
    if (!canvas) {
        console.error('Canvas element not found!');
        return;
    }

    const ctx = canvas.getContext('2d');
    console.log('Canvas found:', canvas);
    console.log('Canvas dimensions:', canvas.width, canvas.height);

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        console.log('Canvas resized to:', width, height);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse position
    let mouse = {
        x: -100,
        y: -100
    };

    // Particle class
    class Particle {
        constructor(x, y) {
            this.x = x + (Math.random() - 0.5) * 10;
            this.y = y + (Math.random() - 0.5) * 10;
            this.size = Math.random() * 15 + 5;
            this.maxSize = this.size;
            this.vx = (Math.random() - 0.5) * 1;
            this.vy = (Math.random() - 0.5) * 1;
            this.life = 1;
            this.color = {
                r: 0,
                g: 86,
                b: 113
            };
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life -= 0.01;
            this.size = this.maxSize * this.life;

            // Add some randomness to movement
            this.vx += (Math.random() - 0.5) * 0.1;
            this.vy += (Math.random() - 0.5) * 0.1;

            // Limit velocity
            this.vx *= 0.98;
            this.vy *= 0.98;
        }

        draw() {
            if (this.life <= 0) return;

            ctx.save();
            ctx.globalAlpha = this.life * 0.5;

            // Create gradient for smoky effect
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.size
            );
            gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life * 0.8})`);
            gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life * 0.4})`);
            gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        isDead() {
            return this.life <= 0;
        }
    }

    const particles = [];
    let lastTime = Date.now();
    let particleTimer = 0;

    // Track mouse movement
    document.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    document.addEventListener('mouseleave', function() {
        mouse.x = -100;
        mouse.y = -100;
    });

    // Animation loop
    function animate() {
        const now = Date.now();
        const deltaTime = now - lastTime;
        lastTime = now;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Add new particles based on mouse movement
        if (mouse.x > 0 && mouse.y > 0) {
            particleTimer += deltaTime;
            if (particleTimer > 16) { // ~60fps particle generation
                for (let i = 0; i < 3; i++) {
                    particles.push(new Particle(mouse.x, mouse.y));
                }
                particleTimer = 0;
            }
        }

        // Update and draw particles
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();

            if (particles[i].isDead()) {
                particles.splice(i, 1);
            }
        }

        // Draw cursor
        if (mouse.x > 0 && mouse.y > 0) {
            // Outer ring
            ctx.strokeStyle = 'rgba(0, 86, 113, 0.8)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 15, 0, Math.PI * 2);
            ctx.stroke();

            // Inner dot
            ctx.fillStyle = 'rgba(0, 86, 113, 1)';
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(animate);
    }

    // Start animation
    animate();
    console.log('Smoke cursor animation started');
});


