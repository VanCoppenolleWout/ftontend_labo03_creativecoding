(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const canvasElement = document.querySelector('.js-canvas');
        if (!canvasElement) throw new Error('The canvas could not be loaded');

        // const p1 = new Particle(48, 'brown');
        // const p2 = new Particle(48, 'brown');
        // const p3 = new Particle(78, 'brown');

        // draw.setup(canvasElement);
        // draw.circle(130, 150, p1);
        // draw.circle(250, 150, p2);
        // draw.circle(190, 200, p3);

        // draw.setup(canvasElement);
        const ctx = draw.setup(canvasElement);
        const particles = sparks.generate(ctx, 50);
        // console.table(particles);
        sparks.render(particles);
        sparks.animate(ctx, particles);

        sparks.enableMouseListener();

        // generate.repeatingPattern(1000); // rectangular, circle, square
    });
})();