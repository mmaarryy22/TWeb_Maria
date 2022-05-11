import { List } from 'antd'
// import { IContentModel } from '../../interfaces/interfaces'
import { IContentModel } from '../../../interfaces/interfaces'

export const Note = ({ content }: { content: IContentModel }) => {
    return (
        <List.Item.Meta
            title={ content.title }
            description={ content.notes }
        />
    )
}