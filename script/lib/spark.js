class Spark {
    constructor({x, y, dX = 0, dY = 0, size = 12, color = 'black'}) {
        this.x = x;
        this.y = y;
        this.dX = dX;
        this.dY = dY;
        this.size = size;
        this.color = color;
    
    }
    render() {
        draw.circle(this.x, this.y, {size: this.size, color: this.color});
    }
}