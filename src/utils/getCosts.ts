import { ICashFlow, IValut } from "../interfaces"

export default function(arr: ICashFlow[], vallets: IValut[]) {
    let newArr = []
    let fullPrice = 0
    newArr = arr.filter(item => item.income < 0)
    newArr = newArr.filter(item => {
        for (let i = 0; i < vallets.length; i++) {
            if (item.currency === vallets[i].sumbol) {
                return item
            }
        }
        if (item.currency === "₴") {
            fullPrice += item.income
        }
    })
    newArr = newArr.map(item => {
        for (let i = 0; i < vallets.length; i++) {
            if (item.currency === vallets[i].sumbol) {
                return {
                    income: vallets[i].value! * item.income,
                    currency: item.name
                }
            }
        }
    })
    newArr.forEach(item => {
        if (item && item.income) {
            fullPrice += item.income
        }
    })

    return parseFloat(fullPrice.toFixed(1))
}
