<template>
	<div id="app">
		<div v-if="authenticated">
			<the-nav/>
			<section class="section">
			<router-view/>
			</section>
		</div>
		<div v-else>
			<section class="section">
				<auth />
			</section>
		</div>
	</div>
</template>

<script>
import TheNav from './views/layout/TheNav';
import Auth from './views/auth/Index';
import {  mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {
	TheNav,
	Auth
  },
  computed: {
    ...mapGetters({authenticated:'auth/authenticated'}),
  }
}
</script>

