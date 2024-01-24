import { Shape } from "./shapes/shape.js";
import { newRectangle } from "./shapes/rectangle.js";
import { newCircle } from "./shapes/circle.js";
import { newSquare } from "./shapes/square.js";
import { newRenderer } from "./renderer.js";

const shape: Shape = newRectangle(2, 3)
const renderer = newRenderer(shape)
renderer.draw();