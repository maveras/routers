<template>
	<div>
		<h3>Some User Detail</h3>
		<p>  user has id : {{ $route.params.id}}</p>
		<router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				link: {
					name: 'userEdit',
					params: {
						id: this.$route.params.id
					},
					query: {
						locale:'es', q:100
					},
					hash: '#data'
				}
			}
		}
	}
</script>