<template>
	<v-app-bar dark color="primary" app elevation="1">
		<v-app-bar-title>
			{{ title }}
		</v-app-bar-title>
		<v-spacer></v-spacer>
		{{ description }}
	</v-app-bar>
</template>
<script>
export default {
	data() {
		return {
			title: 'visual electron',
			description: '图形化electron应用编辑器',
		}
	},
}
</script>
