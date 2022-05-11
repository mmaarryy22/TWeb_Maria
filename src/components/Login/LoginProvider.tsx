import { LoginStore } from "./LoginStore"

export const myStore = LoginStore.create({
    contents:[
        {
            id: '1',
            login: 'Mirela',
            parola: 'Bostan'
        },
    ]
})