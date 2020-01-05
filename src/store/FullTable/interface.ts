import { IFullBodyText } from "../../components/Full/TableFull"

export interface IFullTable {
    onCheck: number[]
    editElementId: undefined | number
    bodyText: IFullBodyText
    itemSelectedId: Array<number>
}
