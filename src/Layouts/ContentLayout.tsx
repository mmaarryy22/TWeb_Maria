import { Breadcrumb, Layout, List, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import {Note } from '../Form/Notes/Note'
import { Login } from '../Form/Login/Forms/Login'
import { useRootStore } from '../index'
import { IContentModel } from '../interface/interfaces'
import { CardCustom } from './CardCustom'

const { Footer } = Layout

export const ContentLayout = observer(() => {

    const { contents, contents_notes } = useRootStore()

    useEffect(() => {
        console.log('>>contents_notes', contents_notes)
    }, [ contents_notes ])

    return (
        <>
            <Content style={ { padding: '0 50px' } }>
                {}

                <div className="style-layout-content">
                    <br />
                    <Login />
                </div>
            </Content>
            <Footer style={ { textAlign: 'center' } }>UTM ©2022 Created by Maarryy</Footer>
        </>

    )
})