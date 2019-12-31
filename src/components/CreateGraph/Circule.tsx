import React, { createRef } from "react"
import Chart from "chart.js"

type IProps = {
    names: string[]
    colors: string[]
    values: number[]
}

class Circule extends React.Component<IProps> {
    private refCanvas = createRef<HTMLCanvasElement>()
    componentDidMount() {
        const { names, colors, values } = this.props
        const obj = this.refCanvas.current
        const data = {
            labels: names,
            datasets: [
                {
                    label: "My First dataset",
                    data: values,
                    backgroundColor: colors,
                    options: {
                        cutoutPercentage: 0
                    }
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
