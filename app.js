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
        ["#9D50BB", "#6E48AA"],
        ["#4776E6", "#8E54E9"],
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
        const file = input.files[0];
        const imgURL = URL.createObjectURL(file);
        img.src = imgURL;

        //esperamos hasta load

        img.addEventListener("load", () => {
            try {
              const dominantColor = colorThief.getPalette(img,7);
              const div1 = document.querySelector(".divPrincipal");
              const div2 = document.querySelector(".div2");
              const div3 = document.querySelector(".div3");
              const div4 = document.querySelector(".div4");
              const div5 = document.querySelector(".div5");
              const div6 = document.querySelector(".div6");
              const div7 = document.querySelector(".div7");
              const rgbColor1 = "rgb("+dominantColor[0]+")";
              div1.style.backgroundColor = rgbColor1;
              div1.innerHTML = rgbColor1;

              const rgbColor2 = "rgb("+dominantColor[1]+")";
              div2.style.backgroundColor = rgbColor2;
              div2.innerHTML = rgbColor2;

              const rgbColor3 = "rgb("+dominantColor[2]+")";
              div3.style.backgroundColor = rgbColor3;
              div3.innerHTML = rgbColor3;

              const rgbColor4 = "rgb("+dominantColor[3]+")";
              div4.style.backgroundColor = rgbColor4;
              div4.innerHTML = rgbColor4;

              const rgbColor5 = "rgb("+dominantColor[4]+")";
              div5.style.backgroundColor = rgbColor5;
              div5.innerHTML = rgbColor5;

              const rgbColor6 = "rgb("+dominantColor[5]+")";
              div6.style.backgroundColor = rgbColor6;
              div6.innerHTML = rgbColor6;

              const rgbColor7 = "rgb("+dominantColor[6]+")";
              div7.style.backgroundColor = rgbColor7;
              div7.innerHTML = rgbColor7;

            } catch (e) {
              console.error("Error con ColorThief:", e);
            }
          });
    });

  });
