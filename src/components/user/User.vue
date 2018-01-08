<template>
	<div>
		<h1>The User Page</h1>
		<p>User id: {{id}}</p>
		<button class="btn btn-primary" @click="gotoHome()">Go to home page</button>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		methods: {
			gotoHome () {
				this.$router.push('/')
			}
		}
	}
</script>