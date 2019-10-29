<template>
  <div id="app">
		<appNav></appNav>
		<router-view></router-view>
  </div>
</template>




<script>
import appNav from '@/components/Nav'

export default {
  components: {
		appNav
  }
}
</script>

<style>
body{
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	font-size: 16px;
	color: #2c3e50;
}
</style>
