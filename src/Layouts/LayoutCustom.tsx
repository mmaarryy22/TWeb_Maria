import { Layout, Menu, Breadcrumb } from "antd";
import { ContentLayout } from './ContentLayout';
import './LayoutC.css';
import { Forms } from '../Form/Forms';

const { Header, Content, Footer } = Layout;

const Informations = [
    {
        id: 1,
        title: "Orasul",
        description: "Chisinau"
    },
    {
        id: 2,
        title: "Raionul",
        description: "Botanica"
    },
    {
        id: 3,
        title: "Strada",
        description: "str.Dacia"
    },
    {
        id: 4,
        title: "Index Postal",
        description: "MD2043"
    },
    {
        id: 5,
        title: "Numar de telefon",
        description: "0022115544"
    },



]


export const LayoutCustom = () =>{
    return(
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        {new Array(4).fill(null).map((_, index) => {
                            const key = index + 1;
                            return <Menu.Item key={key}>{`Bara ${key}`}</Menu.Item>;
                        })}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Acasa</Breadcrumb.Item>
                        <Breadcrumb.Item>Detalii</Breadcrumb.Item>
                        <Breadcrumb.Item>Aplicatie</Breadcrumb.Item>
                        <Breadcrumb.Item>Notite</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="site-layout-content">
                        {   Informations.map((el, index) =>{
                            return(
                              //  <ContentLayout key={el.id} title={el.title} description={el.description} />
                              <ContentLayout key={el.id}  />
                            )
                        })
                        }

                    </div>
                    <Forms></Forms>
                </Content>
            </Layout>,
        </>
    )
}