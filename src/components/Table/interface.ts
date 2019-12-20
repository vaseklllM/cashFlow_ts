// Интерфейс BodyText в генераторі таблиці
export interface IBodyText {
    title: string
    emptyArray: string
    collumn: Array<string>
    rows: string[][] | 'Loading...'
}
