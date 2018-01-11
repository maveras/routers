<template>
	<div>
		<h3>Some User Detail</h3>
		<p>  user has asssssid : {{ $route.params.id}}</p>
		<router-link tag="button" :to="'/user/'+ $route.params.id +'/edit'" class="btn btn-primary">Edit</router-link>
	</div>
</template>