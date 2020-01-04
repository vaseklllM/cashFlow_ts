import cashFlow from "./arrayCashFlow"
import { ICashFlow, IValut } from "../../interfaces"
import { convertToNumber } from "../../utils/calc"

class serverMoney {
    private valletPrivatbank =
        "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"

    private btc_uah_url: string = "https://kuna.io/api/v2/tickers/btcuah"

    private getVallet = async (url: string): Promise<any> => {
        const response = await fetch(url)
        const course = await response.json()
        return course
    }

    public getCashFlow = (): Promise<ICashFlow[]> => {
        // throw new Error('test')
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(cashFlow)
            }, 700)
        })
    }

    public async GetVallets(): Promise<IValut[]> {
        // get BTC ---------------------------------------------------
        const BTC_json: any = await this.getVallet(this.btc_uah_url)
        const BTC: number = Math.floor(BTC_json.ticker.low)

        // get USD ---------------------------------------------------
        const USD_json = await this.getVallet(this.valletPrivatbank)
        const USD: number = parseFloat(
            USD_json.filter((i: any) => i.ccy === "USD")[0].sale
        )

        // get EUR ---------------------------------------------------
        const EUR_json = await this.getVallet(this.valletPrivatbank)
        const EUR: number = parseFloat(
            EUR_json.filter((i: any) => i.ccy === "EUR")[0].sale
        )

        // get RUB ---------------------------------------------------
        const RUB_json = await this.getVallet(this.valletPrivatbank)
        const RUB: number = parseFloat(
            RUB_json.filter((i: any) => i.ccy === "RUR")[0].sale
        )

        const arr: IValut[] = [
            { cc: "BTC", sumbol: "₿", value: convertToNumber(BTC) },
            { cc: "EUR", sumbol: "€", value: convertToNumber(EUR) },
            { cc: "RUB", sumbol: "₽", value: convertToNumber(RUB) },
            { cc: "UAH", sumbol: "₴", value: 1 },
            { cc: "USD", sumbol: "$", value: convertToNumber(USD) }
        ]

        return arr
    }
}
export default serverMoney
