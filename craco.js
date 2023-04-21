const { whenProd } = require('@craco/craco');

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
