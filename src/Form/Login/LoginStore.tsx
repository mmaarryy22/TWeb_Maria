import { applySnapshot, types } from 'mobx-state-tree'
import { ILoginModel } from '../../interface/interfaces'
import { LoginModel } from './LoginModel'

export const LoginStore = types.model('LoginStore', {
    contents: types.array(LoginModel),

    contents_notes: types.array(types.safeReference(LoginModel))

})
    .actions((self) => ({
        setDataToLocalStorage(value: any = {}) {
            localStorage.setItem('Inregistrare', JSON.stringify(value))
        },
    }))

    .actions((self) => ({
        setInitialStorageContents() {
            self.setDataToLocalStorage(self.contents)
        }

    }))