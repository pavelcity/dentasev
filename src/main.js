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
		apiKey: "AIzaSyCSQEVo-qXxKLmAVpXH-j0K-5Ho4nMV5xI",
    authDomain: "dentasev.firebaseapp.com",
    databaseURL: "https://dentasev.firebaseio.com",
    projectId: "dentasev",
    storageBucket: "dentasev.appspot.com",
    messagingSenderId: "466206880259",
    appId: "1:466206880259:web:1cded90be59e727aab5436"
		})
	}
}).$mount('#app')
