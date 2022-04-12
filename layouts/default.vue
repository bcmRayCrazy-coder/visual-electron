<template>
	<v-app dark>
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

export default {
	components: { footertip },
	name: 'DefaultLayout',
	data() {
		return {}
	},
}
</script>
