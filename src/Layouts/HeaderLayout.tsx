
import { Layout, Menu } from 'antd'
import { Routes, Route, Link } from "react-router-dom";
import { Login } from '../components/Login/Form/Login';
import { ContentLayout } from './ContentLayout';

const { Header } = Layout

export const HeaderLayout = () => {
    return (
        <>
            <Header>
                <div className='logo' />
                <Menu theme='dark' mode='horizontal' >
                    <Menu.Item key={1}>
                        <Link to="/">Inregistrare</Link>
                    </Menu.Item>
                    <Menu.Item key={1}>
                        <Link to="/content">Contents</Link>
                    </Menu.Item>
                </Menu>
            </Header>

            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/content' element={<ContentLayout />} />
            </Routes>
        </>
    )
}