import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import * as fb from 'firebase'


Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router,
	store,
	created () {
		fb.initializeApp ({
		apiKey: "???",
    authDomain: "????",
    databaseURL: "???",
    projectId: "dentasev",
    storageBucket: "???",
    messagingSenderId: "???",
    appId: "???"
		})
	}
}).$mount('#app')
