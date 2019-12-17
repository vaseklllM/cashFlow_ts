import cashFlow from "./arrayCashFlow"
import { ICashFlow, IValut, TCurrency, TRate, TValut } from "../../interfaces"

class serverMoney {
    private valletUrl = (valletCode: string, date: string): string =>
        `https://old.bank.gov.ua/NBUStahtService/v1/statdirectory/exchange?valcode=${valletCode}&date=${date}&json`

    // private valletUrl = (valletCode: string, date: string): string =>
    //     `https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valletCode}&date=${date}&json`

    private btc_uah_url: string = "https://kuna.io/api/v2/tickers/btcuah"

    private getVallet = async (url: string): Promise<any> => {
        const response = await fetch(url)
        const course = await response.json()
        return course
    }

    public getCashFlow = (): Promise<ICashFlow[]> => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(cashFlow)
            }, 700)
        })
    }

    public async GetVallets(): Promise<IValut[]> {
        const date: Date = new Date()
        const todaysDate: string = `${date.getFullYear()}${date.getMonth() +
            1}${date.getDate()}`

        const vallut: TValut = [
            createValut("USD", "$", null),
            createValut("EUR", "€", null),
            createValut("RUB", "₽", null),
            createValut("BTC", "₿", null),
            createValut("UAH", "₴", 1)
        ]

        function createValut(
            cc: TRate,
            sumbol: TCurrency,
            value: number | null
        ): IValut {
            return {
                cc,
                sumbol,
                value
            }
        }

        // add btc course
        await this.getVallet(this.btc_uah_url).then(res => {
            vallut.forEach(item =>
                item.cc === "BTC"
                    ? (item.value = parseFloat(res.ticker.low))
                    : null
            )
        })

        // add usd, eur, rub course
        for (let i = 0; i < vallut.length; i++) {
            await this.getVallet(this.valletUrl(vallut[i].cc, todaysDate)).then(
                res => {
                    if (res.length) {
                        vallut[i].value = parseFloat(res[0].rate.toFixed(2))
                    }
                }
            )
        }
        return vallut
    }
}
export default serverMoney
