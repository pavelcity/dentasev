import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import slider from './modules/slider'

export default new Vuex.Store ({
	modules: {
		slider
	}
})