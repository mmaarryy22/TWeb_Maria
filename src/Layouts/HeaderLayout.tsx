import { Layout, Menu } from 'antd'

const { Header } = Layout

export const HeaderLayout = () => {
    return (
        <Header>
            <div className='logo' />
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={ [ '2' ] }>
                { new Array(5).fill(null).map((_, index) => {
                    const key = index + 1
                    return <Menu.Item key={ key }>{ `Bara nr ${ key }` }</Menu.Item>
                }) }
            </Menu>
        </Header>
    )
}