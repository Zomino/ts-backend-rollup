import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import typescript from '@rollup/plugin-typescript';

const config = {
    input: 'src/index.js',
    output: {
        dir: 'dist',
        sourcemap: true,
    },
    plugins: [
        del({ targets: './dist' }),
        commonjs(),
        typescript(),
    ]
};


export default config;
