document.addEventListener('DOMContentLoaded', function () {
    // const col = ['#FF5733', '#C70039', '#900C3F', '#581845', '#2E86C1', '#AED6F1', '#196F3D', '#58D68D', '#F4D03F', '#F39C12', '#922B21', '#D5DBDB', '#5B2C6F', '#AF601A', '#F1948A', '#BB8FCE', '#85C1E9', '#48C9B0', '#58D68D', '#F0F0F0', '#7DCEA0'];
    function generateRandomColors(count) {
        const col = [];
        for (let i = 0; i < count; i++) {
            const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            col.push(color);
        }
        return col;
    };
    const colors = generateRandomColors(21);
    
    const colorsContainer = document.getElementById('colorPalette');
    console.log(colors);
    let selectedColor = colors[0];
    console.log(selectedColor);
    colors.forEach(color => {
        const colorSquare = document.createElement('div');
        colorSquare.className = 'color';
        colorSquare.style.backgroundColor = color;
        colorSquare.addEventListener('click', () => {
            console.log('Selected color:', color);
            selectedColor = color;
        });
        colorsContainer.appendChild(colorSquare);
    });

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 60 * 10;
    canvas.height = 30 * 10;

    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    document.getElementById('clearButton').addEventListener('click', clearCanvas);

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    };

    function stopDrawing() {
        isDrawing = false;
        ctx.beginPath();
    };

    function draw(e) {
        if (!isDrawing) return;

        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / 10);
        const y = Math.floor((e.clientY - rect.top) / 10);

        ctx.fillStyle = selectedColor;
        ctx.fillRect(x * 10, y * 10, 10, 10);
    };

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
});