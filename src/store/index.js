import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import app from './modules/app'
import user from './modules/user'
import tab from './modules/tab'
import menu from './modules/menu'
import iframe from './modules/iframe'

const store = new vuex.Store({
    modules: {
        app: app,
        tab: tab,
        user: user,
        menu: menu,
        iframe: iframe
    }
})

export default store