import React, { createRef } from "react"
import Chart from "chart.js"
import { greateRandomColors } from "../../utils/calc"

type TProps = {
    names: string[]
    values: number[]
}

class Bar extends React.Component<TProps> {
    chart: Chart | undefined = undefined
    private refCanvas = createRef<HTMLCanvasElement>()
    componentDidMount() {
        const { names, values } = this.props
        const fullDate: TResizeValues = resizeValues(values, names)
        const colors = greateRandomColors(fullDate.names.length, 0.3, 0.5)
        const obj = this.refCanvas.current
        const data = {
            labels: fullDate.names,
            datasets: [
                {
                    label: "",
                    data: fullDate.values,
                    backgroundColor: colors.color,
                    borderColor: colors.borderColor,
                    borderWidth: 1.5
                }
            ]
        }
        if (obj) {
            this.chart = new Chart(obj, {
                type: "bar",
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

type TResizeValues = {
    values: number[]
    names: string[]
}

function resizeValues(values: number[], names: string[]): TResizeValues {
    let newValues: number[] = []
    let newNames: string[] = []
    for (let i = 0; i < names.length; i++) {
        if (values[i] !== 0) {
            newValues.push(values[i])
            newNames.push(names[i])
        }
    }
    return {
        values: newValues,
        names: newNames
    }
}

export default Bar
