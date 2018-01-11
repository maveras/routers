<template>
	<div>
		<h3>Edit the User</h3>
		<p>Locale: {{$route.query.locale}}</p>
		<p>query: {{$route.query.q}}</p>
		<button class="btn btn-primary" @click="confirmed = true">Confirm</button>
		<div style="height:400px;"></div>
		<div id="data">some other info</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				confirmed: false
			}
		},
		beforeRouteLeave (to, from, next) {
			if (this.confirmed) {
				next()
			} else {
				if (confirm('are you sure??')) {
					next ()
				} else {
					next (false)
				}
			}
		}
	}
</script>