<template>
	<div>
		<v-dialog v-model="loading" width="450" persistent>
			<v-card color="primary" dark>
				<v-card-title>{{ loadingText }}</v-card-title>
				<v-card-text>
					{{ loadingTip }}
					<v-progress-linear indeterminate color="white" />
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>
<script>
import loadTips from '~/plugins/loadTips.js'

var tipInd = Math.floor(Math.random() * loadTips.length)

export default {
	data() {
		return {
			loading: true,
			loadingText: '加载中...',
			loadingTip: loadTips[tipInd],
		}
	},
	mounted() {
		this.$nextTick(() => {
			setTimeout(() => {
				this.loading = false
			}, 1000)
		})
	},
}
</script>
