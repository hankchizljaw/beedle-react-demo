module.exports = () => {
    return new Promise(async resolve => {
        const entries = [
            {
                path: `${__dirname}/js/main.js`,
                name: 'main'
            }
        ];

        const configs = entries.reduce((configs, entry) => {
            const { path, name } = entry;
            return [
                ...configs,
                {
                    entry: path,
                    mode:
                        process.env.NODE_ENV === 'production'
                            ? 'production'
                            : 'development',
                    module: {
                        rules: [
                            {
                                test: /\.(js)$/,
                                exclude: /node_modules/,
                                use: ['babel-loader']
                            }
                        ]
                    },
                    output: {
                        path: `${__dirname}/js/dist/`,
                        filename: `${name}.js`
                    }
                }
            ];
        }, []);
        resolve(configs);
    });
};
