import type { RollupOptions } from 'rollup';
import typescript from '@rollup/plugin-typescript';

const config: RollupOptions = {
    input: 'src/index.js',
    output: {
        file: 'build/bundle.js',
        sourcemap: true,
    },
    // This casting to any is necessary as TS is incorrectly inferring the type here
    plugins: [(typescript as any)()]
};


export default config;
