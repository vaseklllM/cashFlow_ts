import { user } from "../interfaces"

class usersService {
    private date: user[] = [
        { name: "vasek", age: 5 },
        { name: "boria", age: 19 },
        { name: "yura", age: 21 },
        { name: "yura", age: -3 },
        { name: "kesh", age: 17 }
    ]
    private random: number = Math.floor(Math.random() * 2)

    public getUsers(): Promise<user[] | string> {
        return new Promise((res, reject) => {
            setTimeout(() => {
                if (this.random === 0) {
                    res(this.date)
                } else {
                    reject(res())
                }
            }, 1000)
        })
    }
}

export default usersService
