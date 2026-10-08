function init() {
    const x = 5; 
    const y = Math.round(window.screen.height / 28); 
    const frequency = 5000; // Time between raindrops in milliseconds
    const rainSpeed = 100; // Speed of raindrops in milliseconds
    const length = 2; // Amount of characters fully lit up before fading

    const element = document.getElementById("matrix");
    const element2 = document.getElementById("matrix2");
    // const matrix = Array.from({ length: x }, () => Array(y).fill(randomChar()));

    function randomChar() {
        const chars = "qwertyuiopasdfghjklzxcvbnm1234567890ABCDEF"
        return chars.charAt(Math.floor(Math.random() * chars.length));
    }

    function draw() {
        for (let row = 0; row < y; row++) {
            for (let col = 0; col < x; col++) {
                const span = document.createElement("span");
                span.className = "matrix";
                span.textContent = randomChar();
                span.id = row + "-" + col;
                element.appendChild(span);
            }
            const line = document.createElement("br");
            element.appendChild(line);
        }
    }

    function draw2() {
        for (let row = 0; row < y; row++) {
            for (let col = x; col < x*2; col++) {
                const span = document.createElement("span");
                span.className = "matrix";
                span.textContent = randomChar();
                span.id = row + "-" + col;
                element2.appendChild(span);
            }
            const line = document.createElement("br");
            element2.appendChild(line);
        }
    }

    function rain() {
        const random = Math.floor(Math.random() * x * 2)
        for (let row = 0; row < y; row++) {
            const span = document.getElementById(row + "-" + random);
            setTimeout(function() {
                span.classList.add("active");
            }, rainSpeed * row);
            setTimeout(function() {
                span.classList.remove("active");
            }, rainSpeed * (row + length));
        }
    }

    draw();
    draw2();
    setInterval(rain, frequency);
}

window.addEventListener( "load", init, false );
