import { applySnapshot, types } from 'mobx-state-tree'
import { ILoginModel } from '../../interfaces/interfaces'
import { LoginModel } from './LoginModel'

export const LoginStore = types.model('LoginStore', {
    contents: types.array(LoginModel),

    contents_notes: types.array(types.safeReference(LoginModel))

})
    .actions((self) => ({
        setDataToLocalStorage(value: any = {}) {
            localStorage.setItem('inregistrare', JSON.stringify(value))
        },
    }))

    .actions((self) => ({
        setInitialStorageContents() {
            self.setDataToLocalStorage(self.contents)
        }

    }))