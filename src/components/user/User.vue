<template>
	<div>
		<h1>The User Page</h1>
		<button class="btn btn-primary" @click="gotoHome()">Go to home page</button>
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