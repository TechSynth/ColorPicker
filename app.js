var granimInstance = new Granim({
    element: "#canvas-basic",
    direction: "left-right",
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ["#9D50BB", "#6E48AA"],
                ["#4776E6", "#8E54E9"],
            ],
        },
    },
});

var granimInstanceBoton = new Granim({
    element: "#btn-canvas",
    direction: "left-right",
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ["#4776E6", "#8E54E9"],
                ["#6E48AA", "#9D50BB"],
            ],
        },
    },
});

document.addEventListener("DOMContentLoaded", () => {
    const colorThief = new ColorThief();
    const submit = document.getElementById("btn");
    const input = document.getElementById("file");
    const img = document.getElementById("preview");

    submit.addEventListener("click", () => {
        if (!input.files[0]) return;
        const file = input.files[0];
        const imgURL = URL.createObjectURL(file);
        img.src = imgURL;

        img.addEventListener("load", () => {
            try {
                const palette = colorThief.getPalette(img, 7);
                const boxes = [
                    document.querySelector(".divPrincipal"),
                    document.querySelector(".div2"),
                    document.querySelector(".div3"),
                    document.querySelector(".div4"),
                    document.querySelector(".div5"),
                    document.querySelector(".div6"),
                    document.querySelector(".div7")
                ];

                palette.forEach((color, index) => {
                    if (boxes[index]) {
                        const rgbString = `RGB(${color[0]}, ${color[1]}, ${color[2]})`;
                        
                        const hex = colvertize.convert(rgbString, 'css-hex'); //https://github.com/Philipp-M/colvertize
                        
                        const textColor = colvertize.convert(hex, 'css-hex', colvertize.invertDarkLight({
                            dark: '#000000',
                            light: '#ffffff',
                            threshold: 0.179
                        }));  

                        boxes[index].style.backgroundColor = hex;
                        boxes[index].style.color = textColor;
                        boxes[index].innerHTML = `<span>HEX ${hex}</span>`;
                        boxes[index].innerHTML += `<span>${rgbString}</span>`;
                    }
                });
            } catch (e) {
                console.error(e);
            }
        }, { once: true });
    });
});