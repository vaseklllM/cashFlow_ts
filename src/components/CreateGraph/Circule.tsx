import React, { createRef } from "react"
import Chart from "chart.js"
import { greateRandomColors } from "../../utils/calc"

type TProps = {
    names: string[]
    values: number[]
}

class Circule extends React.Component<TProps> {
    chart: Chart | undefined = undefined

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
            this.chart = new Chart(obj, {
                type: "pie",
                data,
                options: {}
            })
        }
    }

    render() {
        const { names, values } = this.props

        if (this.chart && Array.isArray(this.chart.data.datasets)) {
            this.chart.data.datasets[0].data = values
            this.chart.data.labels = names
            this.chart.update()
        }

        return <canvas ref={this.refCanvas}></canvas>
    }
}

export default Circule
