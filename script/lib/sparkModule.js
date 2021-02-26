const sparks = (function () {
    const colors = ['red', 'green', 'blue'];

    const cursor = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    };

    const generateSpark = (ctx) => {
        const maxVelocity = 5;
        const size = Math.floor(Math.random() * 12 ) + 5,
                x = Math.round(Math.random() * (ctx.canvas.width - size * 2)) + size,
                y = Math.round(Math.random() * (ctx.canvas.height - size * 2)) + size,
                color = colors[Math.floor(Math.random() * colors.length)];
                
        return new Spark({
            x: cursor.x,
            y: cursor.y,
            dX: Math.random() * (maxVelocity * 2) - maxVelocity,
            dY: Math.random() * (maxVelocity * 2) - maxVelocity,
            size: size,
            color: color,
        });
    };


    const generateSparks = (ctx, amount) => {
        const sparks = [];
        for (let i = 0; i < amount; i++) {
            sparks.push(generateSpark(ctx));
        }
        return sparks;
    };

    const renderSparks = (sparksArray) => {
        // TODO: render elke spark in deze array
        for (const s of sparksArray) {
            s.render();
        }
    };

    const animateParticles = (ctx, particlesArray) => {
        draw.clearArea();

        for (const p of particlesArray) {
            p.x = p.x + p.dX;
            p.y = p.y + p.dY;
            p.size = p.size * 0.94;

            if (p.size <= 1) {
                particlesArray = particlesArray.filter(s => s != p);
                particlesArray.push(generateSpark(ctx));
            }

            if (p.x <= p.size / 2 ) {
                p.dX = p.dX * -1;
            }

            if (p.y <= p.size / 2 ) {
                p.dY = p.dY * -1;
            }

            if (p.x >= ctx.canvas.width - p.size / 2) {
                p.dX = p.dX * -1;
            }

            if (p.y >= ctx.canvas.height - p.size / 2) {
                p.dY = p.dY * -1;
            }
        }
        renderSparks(particlesArray);
        requestAnimationFrame(() => {
            animateParticles(ctx, particlesArray);
        })
    };

    const enableMouseListener = () => {
        document.addEventListener('mousemove', function(e)  {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
        })
    }
    
    return {
        generate: generateSparks,
        render: renderSparks,
        animate: animateParticles,
        enableMouseListener,
    }
})();