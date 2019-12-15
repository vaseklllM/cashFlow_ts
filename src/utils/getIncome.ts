import { TCashFlow, IValut, ICashFlow } from "../interfaces"

function getIncome(arr: ICashFlow[], vallets: IValut[]) {
    let newArr: ICashFlow[] = []
    let fullPrice: number = 0
    newArr = arr.filter(item => item.income > 0)
    newArr = newArr.filter((item: ICashFlow) => {
        for (let i = 0; i < vallets.length; i++) {
            if (item.currency === vallets[i].sumbol) {
                return item
            }
        }
        if (item.currency === "₴") {
            fullPrice += item.income
        }
    })
    const tempArr = newArr.map((item: ICashFlow) => {
        for (let i = 0; i < vallets.length; i++) {
            if (item.currency === vallets[i].sumbol) {
                return {
                    income: vallets[i].value! * item.income,
                    currency: item.name
                }
            }
        }
    })

    tempArr.forEach(item => {
        if (item && item.income) {
            fullPrice += item.income
        }
    })
    return parseFloat(fullPrice.toFixed(1))
}

export default getIncome
