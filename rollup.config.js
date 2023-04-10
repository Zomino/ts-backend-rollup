import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

const config = {
    input: 'src/index.js',
    output: {
        file: 'build/bundle.js',
        sourcemap: true,
    },
    plugins: [
        commonjs(),
        typescript(),
    ]
};


export default config;
