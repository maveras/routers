<template>
	<div>
		<h1>The User Page</h1>
		<p>User id: {{id}}</p>
		<button class="btn btn-primary" @click="gotoHome()">Go to home page</button>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				id: this.$route.params.id
			}
		},
		methods: {
			gotoHome () {
				this.$router.push('/')
			}
		}
	}
</script>