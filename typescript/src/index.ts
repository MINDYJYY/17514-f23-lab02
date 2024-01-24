import { Shape } from "./shapes/shape";
import { newRectangle } from "./shapes/rectangle";
import { newCircle } from "./shapes/circle";
import { newSquare } from "./shapes/square";
import { newRenderer } from "./renderer";

const shape: Shape = newRectangle(2, 3)
const renderer = newRenderer(shape)
renderer.draw();