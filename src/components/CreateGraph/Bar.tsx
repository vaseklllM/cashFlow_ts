import React, { createRef } from "react"
import Chart from "chart.js"
import { greateRandomColors } from "../../utils/calc"

type TProps = {
    names: string[]
    values: number[]
}

class Bar extends React.Component<TProps> {
    private refCanvas = createRef<HTMLCanvasElement>()
    componentDidMount() {
        const { names, values } = this.props
        const colors = greateRandomColors(names.length, 0.3, 0.5)
        const obj = this.refCanvas.current
        const data = {
            labels: names,
            datasets: [
                {
                    label: "",
                    data: values,
                    backgroundColor: colors.color,
                    borderColor: colors.borderColor,
                    borderWidth: 1.5
                }
            ]
        }
        if (obj) {
            new Chart(obj, {
                type: "bar",
                data,
                options: {}
            })
        }
    }

    render() {
        return <canvas ref={this.refCanvas}></canvas>
    }
}

export default Bar
