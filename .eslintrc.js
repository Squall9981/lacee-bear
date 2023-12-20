module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', 'eslint:recommended'],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		'vue/multi-word-component-names': 'off',
		'vue/no-multiple-template-root': 'off',
		// ... other rules
	},
};
