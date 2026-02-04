# Color Picker

> **Live Demo:** [Click here to view the website](https://techsynth.github.io/ColorPicker/)

A minimalist web tool that extracts a functional color palette from any uploaded image.

## Overview
This project uses image processing to identify dominant colors and generates a structured palette. It is designed for developers and designers who need quick HEX codes with a focus on accessibility and clean UI.

## Key Features
* **Automated Extraction:** Uses ColorThief to grab the most prominent colors from images.
* **Smart Contrast:** Dynamic text color adjustment (black/white) based on background luminance for better readability.
* **HEX Conversion:** Real-time conversion from RGB to HEX format using Colvertize.
* **Visual Interface:** Dynamic background gradients and a grid-based layout for clear palette visualization.

## Tech Stack
* **HTML5 / CSS3:** Custom Grid layout and responsive design.
* **JavaScript:** Vanilla JS for logic and DOM manipulation.
* **Libraries:** Granim.js (gradients), ColorThief (color extraction), and Colvertize (color conversion and accessibility).