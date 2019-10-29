import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Two from '@/pages/Two'
import Contacts from '@/pages/Contacts'
import Metalokeramika from '@/pages/Metalceramika'
import Neylon from '@/pages/Neylon'
import Acril from '@/pages/Acril'
import Implant from '@/pages/Implant'

Vue.use(VueRouter)

export default new VueRouter ({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/two',
			name: 'Two',
			component: Two
		},
		{
			path: '/contacts',
			name: 'Contacts',
			component: Contacts
		},
		{
			path: '/metalokeramika',
			name: 'Metalokeramika',
			component: Metalokeramika
		},
		{
			path: '/neylon',
			name: 'Neylon',
			component: Neylon
		},
		{
			path: '/acril',
			name: 'Acril',
			component: Acril
		},
		{
			path: '/implant',
			name: 'Implant',
			component: Implant
		}
	]
})