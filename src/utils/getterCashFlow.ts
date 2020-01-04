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
        return arr.filter(i => i.income >= 0 && i.pcs > 0 && i.price > 0)
    } else {
        return arr
    }
}
