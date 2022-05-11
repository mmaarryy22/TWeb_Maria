import React, { useEffect } from 'react'
import './App.css'

import { Layout } from 'antd'
import { useRootStore, useLoginStore } from './index'
import { HeaderLayout } from './Layouts/HeaderLayout'
import { ContentLayout } from './Layouts/ContentLayout'


function App() {

    const rootStore = useRootStore();
    const loginStore = useLoginStore();

    useEffect(() => {
        rootStore.setInitialStorageContents()
    }, [])
    
    useEffect(() => {
        loginStore.setInitialStorageContents()
    }, [])

    return (
        <>
            <Layout className='layout'>
                <HeaderLayout />
            </Layout>
        </>
    )
}

export default App