import {extendObservable} from 'mobx';

class UserStore {
    constructor() {
        extendObservable(this, {
            loading: true,
            isLogged: false,
            username: ''
        })
    }
}

export default new UserStore();