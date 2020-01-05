import React, { createRef } from "react"
import Chart from "chart.js"
import { greateRandomColors } from "../../utils/calc"

type TProps = {
    names: string[]
    values: number[]
}

class Circule extends React.Component<TProps> {
    private refCanvas = createRef<HTMLCanvasElement>()
    componentDidMount() {
        const { names, values } = this.props

        const colors = greateRandomColors(names.length, 0.8, 0.8)
        const obj = this.refCanvas.current
        const data = {
            labels: names,
            datasets: [
                {
                    label: "My First dataset",
                    data: values,
                    backgroundColor: colors.color
                },
                {}
            ]
        }
        if (obj) {
            new Chart(obj, {
                type: "pie",
                data,
                options: {}
            })
        }
    }

    render() {
        return <canvas ref={this.refCanvas}></canvas>
    }
}

export default Circule
