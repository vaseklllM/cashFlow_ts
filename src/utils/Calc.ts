import formatDistanceToNow from "date-fns/formatDistanceToNow"
import localeRu from "date-fns/locale/ru"
import { ICashFlow, TRate, IValut } from "../interfaces"

type Tcollbar = "price" | "pcs" | "income"

interface Calc {
    retentionTime(dateStr: string | Date): string
    showDate(dateStr: string | Date, symbul?: string, type?: boolean): any
    roi(item: ICashFlow): string | number
    lastIdFromCashFlow(item: ICashFlow[] | null): number
    deepEqual(obj1: object, obj2: object): boolean
    randomColor(): string
    mathFullPrice(obj: ICashFlow[], collArr: Array<Tcollbar>): any
    convertToNumber(num: number): number
    LC(num: number | null | undefined, sumbol?: string): string // last Convert
}

const Calc: Calc = {
    // Бібліотека "date-fns"
    retentionTime: dateStr => {
        const past = new Date(dateStr)
        return formatDistanceToNow(past, {
            locale: localeRu
        })
    },

    // приймає dateBuy повертає дату для вивода в таблицю
    showDate: (dateStr, sumbol = ".", type = false) => {
        const date: Date = new Date(dateStr)

        const day: string =
            date.getDate() >= 10
                ? date.getDate().toString()
                : `0${date.getDate()}`

        const month: string =
            date.getMonth() + 1 >= 10
                ? (date.getMonth() + 1).toString()
                : `0${date.getMonth() + 1}`

        if (type) {
            return `${month}${sumbol}${day}${sumbol}${date.getFullYear()}`
        } else if (!type) {
            return `${day}${sumbol}${month}${sumbol}${date.getFullYear()}`
        }
    },

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

    // повертає новий id для масива cashFlow
    lastIdFromCashFlow: cashFlow => {
        if (cashFlow !== null) {
            let lastId: number = 0
            cashFlow.forEach(i => {
                if (lastId < i.id) lastId = i.id
            })
            return ++lastId
        } else return 1
    },

    // Зрівнює два об'єкта повертає true якщо рівні
    deepEqual(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2)
    },

    // повертає рандомний колір rgb
    randomColor: () => {
        const rndNum = () => Math.floor(Math.random() * 255)
        return `rgb(${rndNum()}, ${rndNum()}, ${rndNum()})`
    },

    mathFullPrice: (obj, collArr) => {
        const priceArr = obj.map(item => {
            return {
                value: MathPrice(item, collArr),
                cc: item.rate,
                sumbol: item.currency
            }
        })

        // оставляет только уникальные обьекты
        let valetArr = priceArr.map(i => i.cc)
        valetArr = unique(valetArr)

        let newArr = []
        for (let i = 0; i < valetArr.length; i++) {
            const tempArr = priceArr.filter(item => {
                return item.cc.indexOf(valetArr[i]) > -1
            })
            // console.log(tempArr)
            if (tempArr.length === 1) {
                newArr.push(tempArr[0])
            } else {
                newArr.push(uniqueObject(tempArr))
            }
        }
        return newArr
    },

    // Конвертер забирає лишні нулі після коми 5.0000001 => 5
    convertToNumber: num => {
        if (num > -9 && num < 9) {
            return parseFloat(num.toFixed(4))
        } else if (num > -999 && num < 999) {
            return parseFloat(num.toFixed(2))
        } else {
            return Math.floor(num)
        }
    },

    LC: (num, sumbol = "") => {
        if (num) {
            const resize = Calc.convertToNumber(num)
            if (resize < -999 || resize > 999) {
                return resize.toLocaleString("ru-RU") + sumbol
            } else {
                return resize.toString() + sumbol
            }
        } else {
            return "-"
        }
    }
}

// об'єдиняє однакові об'єкти
function uniqueObject(arr: IValut[]): IValut {
    let newObj: IValut = {
        ...arr[0]
    }
    arr.forEach((item: IValut, index: number) => {
        if (index !== 0) {
            newObj = {
                ...newObj,
                value: newObj.value! + item.value!
            }
        }
    })
    return newObj
}

// Повертає price * pcs з полученого обэкта
function MathPrice(item: ICashFlow, collArr: Array<Tcollbar>): number {
    let price: number = 1
    collArr.forEach(i => {
        price = item[i] * price
    })
    return price
}

// Удаляє в массиві елементи які повторюються
function unique(arr: TRate[]): TRate[] {
    let result: TRate[] = []
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str)
        }
    }
    return result
}

export default Calc
