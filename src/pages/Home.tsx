import { React, WebPage } from "kiwi-bundle"
import "./Home.scss"

export default class Home extends WebPage {
  canvas: HTMLCanvasElement

  canvasWidth: number = 1200
  canvasHeight: number = 900

  rackBorder: number = 10
  moduleBorder: number = 0

  rackMargin: number = 10
  moduleMargin: number = 1

  moduleWidth: number = 100
  moduleHeight: number = 200

  racks: any = {
    one: [ {}, {}, {}, {} ],
    two: [ {}, {} ],
    three: [ {}, {}, {} ],
  }

  getTitle() {
    return "Home"
  }

  componentDidMount() {
    this.canvas.width = this.canvasWidth
    this.canvas.height = this.canvasHeight
    const context = this.canvas.getContext("2d")

    Object.keys(this.racks).forEach((rackId, rackIndex) => {
      const rack: any = this.racks[rackId]

      // Values
      const rackWidth = this.moduleMargin + rack.length * (this.moduleWidth + this.moduleMargin)
      const rackHeight = this.moduleHeight + 2 * this.moduleMargin + this.rackBorder * 2
      const rackLeft = this.rackMargin + (this.rackBorder / 2)
      const rackTop = this.rackMargin + (this.rackBorder / 2) + rackIndex * (this.rackBorder + rackHeight + this.rackMargin)

      // Rack
      context.lineWidth = this.rackBorder
      context.beginPath()
      context.rect(rackLeft, rackTop, rackWidth, rackHeight)
      context.stroke()

      // Modules
      rack.forEach((module, moduleIndex) => {
        context.lineWidth = this.moduleBorder
        context.beginPath()
        const moduleLeft = 200 // this.rackMargin + (this.moduleBorder / 2) + this.moduleMargin + moduleIndex * (this.moduleWidth + this.moduleMargin)
        const moduleTop = rackTop + this.rackBorder + this.moduleMargin
        context.rect(moduleLeft, moduleTop, this.moduleWidth, this.moduleHeight)
        context.stroke()
      })
    })
  }

  render() {
    /*return <div>
      <div className="waves"></div>
      <div className="waves reverse"></div>
    </div>*/
    return <canvas className="canvas" ref={ref => { this.canvas = ref }}/>
  }

}
