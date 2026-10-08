function init() {
    if (document.visibilityState === 'visible') {
        animation3();
    }
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            animation3();
        }
    });
}

function animation() {
    const title = document.getElementById("title");
    const text = title.innerHTML;
    for (let i = 0; i < text.length; i++) {
        setTimeout(function() {
            const end = text.slice(i);
            const beginning = text.slice(0, i);
            title.innerHTML = end + " " + beginning;
        }, 50 * i);
    }
    setTimeout(function() {
        title.innerHTML = text;
    }, text.length * 50 + 50)
}

function animation2() {
    const title = document.getElementById("title");
    const text = title.innerHTML;
    for (let i = 0; i <= text.length; i++) {
        setTimeout(function() {
            let end = text.slice(0, text.length - (i));
            title.innerHTML = end;
            if (i != 0) {
                title.innerHTML += "_";
            }
        }, 50 * i);
        setTimeout(function() {
            const end = text.slice(i);
            const beginning = text.slice(0, i);
            title.innerHTML = beginning;
            if (i != text.length) {
                title.innerHTML += "_";
            }
        }, 130 * i + 50 * text.length + 1000);
    }
}

function animation3() {
    const title = document.getElementById("title");
    const text = title.innerHTML;
    title.innerHTML = "_";
    for (let i = 0; i <= text.length; i++) {
        setTimeout(function() {
            const end = text.slice(i);
            const beginning = text.slice(0, i);
            title.innerHTML = beginning;
            if (i != text.length) {
                title.innerHTML += "_";
            }
        }, 120 * i);
    }
}

window.addEventListener( "load", init, false );