<template>
	<div>
		<h3>Some User Detail</h3>
		<p>  user has id : {{ $route.params.id}}</p>
		<router-link tag="button" :to="{ name: 'userEdit', params: {id: $route.params.id}}" class="btn btn-primary">Edit User</router-link>
	</div>
</template>