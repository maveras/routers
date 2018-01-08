<template>
    <div class="container">
    	<navi></navi>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
               	<router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import navi from './components/nav.vue'
	export default {
		components: {
			navi
		}
	}
</script>

<style>
</style>
