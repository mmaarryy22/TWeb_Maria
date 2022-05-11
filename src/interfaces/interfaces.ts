import { Instance } from 'mobx-state-tree'
import { LoginModel } from '../components/Login/LoginModel'
import { LoginStore } from '../components/Login/LoginStore'
import { ContentModel } from '../mst/models/Content.model'
import RootStore from '../mst/stores/RootStore.store'


export interface IRootStore extends Instance<typeof RootStore> {
}

export interface IContentModel extends Instance<typeof ContentModel> {
}

export interface ILoginStore extends Instance<typeof LoginStore> {
}

export interface ILoginModel extends Instance<typeof LoginModel> {
}
