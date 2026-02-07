// Custom Smoke Trail Cursor Implementation
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle window resize
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Particle class for smoke effect
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 15 + 5;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.color = `rgba(0, 86, 113, ${Math.random() * 0.5 + 0.3})`;
            this.life = 100;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.size *= 0.95;
            this.life -= 2;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const particles = [];
    let mouseX = 0;
    let mouseY = 0;

    // Track mouse position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Create multiple particles for smoke effect
        for (let i = 0; i < 3; i++) {
            particles.push(new Particle(mouseX, mouseY));
        }
    });

    // Animation loop
    function animate() {
        // Clear canvas with fade effect for trail
        ctx.fillStyle = 'rgba(244, 244, 244, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();

            // Remove dead particles
            if (particles[i].size < 0.5 || particles[i].life <= 0) {
                particles.splice(i, 1);
            }
        }

        // Draw main cursor dot
        ctx.fillStyle = '#005671';
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 5, 0, Math.PI * 2);
        ctx.fill();

        // Draw cursor ring
        ctx.strokeStyle = '#005671';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 15, 0, Math.PI * 2);
        ctx.stroke();

        requestAnimationFrame(animate);
    }

    animate();
});


