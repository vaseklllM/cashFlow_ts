import { TCashFlow } from "../interfaces"

export function getIncome(arr: TCashFlow): TCashFlow {
    if (Array.isArray(arr)) {
        return arr.filter(i => i.income > 0)
    } else {
        return arr
    }
}

export function getPassive(arr: TCashFlow): TCashFlow {
    if (Array.isArray(arr)) {
        return arr.filter(i => i.income < 0)
    } else {
        return arr
    }
}

export function getActive(arr: TCashFlow): TCashFlow {
    if (Array.isArray(arr)) {
        return arr.filter(i => i.income > 0)
    } else {
        return arr
    }
}

export function getCosts(arr: TCashFlow): TCashFlow {
    if (Array.isArray(arr)) {
        return arr.filter(i => i.income < 0)
    } else {
        return arr
    }
}

export function getCapital(arr: TCashFlow): TCashFlow {
    if (Array.isArray(arr)) {
        return arr.filter(i => i.pcs > 0 && i.price !== 0)
    } else {
        return arr
    }
}

// type TGetterCashFlow = {
//     getIncome: (arr: TCashFlow) => TCashFlow
//     getPassive: (arr: TCashFlow) => TCashFlow
//     getActive: (arr: TCashFlow) => TCashFlow
//     getCosts: (arr: TCashFlow) => TCashFlow
//     getCapital: (arr: TCashFlow) => TCashFlow
// }

// const getterCashFlow: TGetterCashFlow = {
//     getIncome: arr => {
//         if (Array.isArray(arr)) {
//             return arr.filter(i => i.income > 0)
//         } else {
//             return arr
//         }
//     },
//     getPassive: arr => {
//         if (Array.isArray(arr)) {
//             return arr.filter(i => i.income < 0)
//         } else {
//             return arr
//         }
//     },
//     getActive: arr => {
//         if (Array.isArray(arr)) {
//             return arr.filter(i => i.income > 0)
//         } else {
//             return arr
//         }
//     },
//     getCosts: arr => {
//         if (Array.isArray(arr)) {
//             return arr.filter(i => i.income < 0)
//         } else {
//             return arr
//         }
//     },
//     getCapital: arr => {
//         if (Array.isArray(arr)) {
//             return arr.filter(i => i.pcs > 0 && i.price !== 0)
//         } else {
//             return arr
//         }
//     }
// }
// export default getterCashFlow
