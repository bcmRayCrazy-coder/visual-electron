<template>
	<v-app dark>
		<headbar></headbar>
		<v-main>
			<v-container>
				<Nuxt />
			</v-container>
		</v-main>
		<footertip></footertip>
	</v-app>
</template>

<script>
import footertip from '~/components/footertip.vue'
import headbar from '~/components/headbar.vue'

export default {
	components: { footertip, headbar },
	name: 'DefaultLayout',
	data() {
		return {}
	},
}
</script>
