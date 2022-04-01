import serve from 'rollup-plugin-serve'

export default {
    input: './src/index.js',
    output: {
        file: 'dist/vue2-mini.js',
        banner: '// vue-joy',
        format: 'umd',
        name: 'Vue'
    },
    plugins: [
        serve({
            open: false,
            contentBase: '',
            port: 4000
        })
    ]
}