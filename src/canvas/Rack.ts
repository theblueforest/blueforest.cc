import { Module } from "../types/Module"

export class RackCanvas {
  border: 1

  constructor(context: CanvasRenderingContext2D, x: number, y: number, modules: Module[]) {
    const width = 10
    const height = 10
    this.draw(context, x, y, width, height)
  }

  draw(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
    context.lineWidth = this.border
    context.beginPath()
    context.rect(x, y, width, height)
    context.stroke()
  }

}
