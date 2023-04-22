const { whenProd } = require('@craco/craco');
const CracoLessPlugin = require('craco-less');
module.exports = function (props) {
	return {
		babel: {
			plugins: [
				...whenProd(
					() => [['transform-remove-console', { exclude: ['error'] }]],
					[],
				),
			],
		},
		plugins: [
			{
				plugin: CracoLessPlugin,
				options: {
					lessLoaderOptions: {
						lessOptions: {
							javascriptEnabled: true,
							modifyVars: {
								'@primary-color': '#0b9585', //主题色
							},
						},
					},
				},
			},
		],
		webpack: {
			configure: (webpackConfig) => {
				return {
					...webpackConfig,
					...whenProd(
						() => ({
							externals: {
								react: 'React',
								'react-dom': 'ReactDOM',
							},
						}),
						{},
					),
				};
			},
		},
	};
};
