import React, { createRef } from "react"
import Chart from "chart.js"
import { greateRandomColors } from "../../utils/calc"
import { deepEqual } from "assert"

type TProps = {
    names: string[]
    values: number[]
}

type TState = {
    chart: Chart | undefined
}

class Circule extends React.Component<TProps, TState> {
    state = {
        chart: undefined
    }

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
            this.setState({
                chart: new Chart(obj, {
                    type: "pie",
                    data,
                    options: {}
                })
            })
        }
    }
    // componentDidUpdate(nextProps) {
    //     const { names, values } = this.props
    //     const colors = greateRandomColors(names.length, 0.8, 0.8)
    //     const obj = this.refCanvas.current
    //     const data = {
    //         labels: names,
    //         datasets: [
    //             {
    //                 label: "My First dataset",
    //                 data: values,
    //                 backgroundColor: colors.color
    //             },
    //             {}
    //         ]
    //     }
    //     if (obj) {
    //         this.setState({
    //             chart: new Chart(obj, {
    //                 type: "pie",
    //                 data,
    //                 options: {}
    //             })
    //         })
    //     }
    // }

    render() {
        return <canvas ref={this.refCanvas}></canvas>
    }
}

export default Circule
