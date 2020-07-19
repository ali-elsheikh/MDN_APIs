window.onload = drawRect;

function drawRect() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        let x = 0,
            y = 0;
        for (let index = 0; index < 1000; index += 10) {
            x = 10 * index;
            for (let j = 0; j < 1000; j += 10) {
                y = 10 * j;
                ctx.fillStyle = (j / 10) % 2 == 0 ? 'rgb(200, 0, 0)' : 'rgba(0, 0, 200, 0.5)';
                ctx.fillRect(x, y + 10, 50, 50);
                ctx.clearRect(x + 10, y + 20, 30, 30);
                ctx.strokeRect(x + 15, y + 25, 20, 20);

                ctx.fillStyle = (j / 10) % 2 == 1 ? 'rgb(200, 0, 0)' : 'rgba(0, 0, 200, 0.5)';
                ctx.fillRect(x + 50, y + 10, 50, 50);
                ctx.clearRect(x + 60, y + 20, 30, 30);
                ctx.strokeRect(x + 65, y + 25, 20, 20);
            }
        }
    }
}