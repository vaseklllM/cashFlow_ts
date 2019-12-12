import { ICashFlow } from "../interfaces"

interface Calc {
    roi(item: ICashFlow): string | number
    showFullPrice(item: ICashFlow): string
    showPrice(item: ICashFlow): string
    showPcs(item: ICashFlow): string
    lastIdFromCashFlow(item: ICashFlow[]): number
    showIncome(item: ICashFlow): string
    deepEqual(obj1: object, obj2: object): boolean
    showNawBarPrice(value: number | null): string | number
    randomColor(): string
}

const Calc: Calc = {
    // повертає roi актива
    roi: item => {
        const { income, price, pcs } = item
        const lastPrice = price * pcs
        if (!income && !lastPrice) return "-"
        const ROI = parseFloat(((income / lastPrice) * 100 * 12).toFixed(1))
        if (ROI !== 0 && ROI !== -Infinity && ROI !== Infinity) {
            return `${ROI} %`
        } else return "-"
    },

    // повертає повну ціну актива
    showFullPrice: item => {
        const { price, pcs, currency } = item
        const lastPrice = price * pcs
        if (!lastPrice) return "-"
        if (lastPrice < 1 && lastPrice > -1) {
            return `${parseFloat(lastPrice.toFixed(5))} ${currency}`
        } else {
            return `${parseInt(lastPrice + "").toLocaleString(
                "ru-RU"
            )} ${currency}`
        }
    },

    // повертає ціну актива
    showPrice: item => {
        const { price, currency } = item
        if (!price) return "-"
        if (price < 1 && price > -1) {
            return `${parseFloat(price.toFixed(5))} ${currency}`
        } else if (price < 0) {
            return `${Math.abs(price).toLocaleString("ru-RU")} ${currency}`
        } else {
            return `${price.toLocaleString("ru-RU")} ${currency}`
        }
    },

    // повертає кількісь активів
    showPcs: item => {
        const { pcs } = item
        if (!pcs) return "-"
        return `${pcs.toLocaleString("ru-RU")} шт.`
    },
    // повертає новий id для масива cashFlow
    lastIdFromCashFlow: cashFlow => {
        let lastId: number = 0
        cashFlow.forEach(i => {
            if (lastId < i.id) lastId = i.id
        })
        return ++lastId
    },

    // повертає витрати/доходи
    showIncome: item => {
        const { income, currency } = item
        if (!income) return "-"
        if (income < 1 && income > -1) {
            return `${parseFloat(income.toFixed(5))} ${currency}`
        } else {
            return `${income.toLocaleString("ru-RU")} ${currency}`
        }
    },

    // Зрівнює два об'єкта повертає true якщо рівні
    deepEqual(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2)
    },

    //приймає любе число, повертає - або число з пробелом між сотнями і тисячами
    showNawBarPrice(value) {
        if (!value) return "-"
        if (value < 1 && value > -1) {
            return parseFloat(value.toFixed(5))
        } else if (value < 0) {
            return Math.abs(value).toLocaleString("ru-RU")
        } else {
            return value.toLocaleString("ru-RU")
        }
    },

    // повертає рандомний колір rgb
    randomColor: () => {
        const rndNum = () => Math.floor(Math.random() * 255)
        return `rgb(${rndNum()}, ${rndNum()}, ${rndNum()})`
    }
}
export default Calc
