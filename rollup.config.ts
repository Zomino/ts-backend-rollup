import type { RollupOptions } from 'rollup';

const config: RollupOptions = {
    input: 'src/index.js',
    output: {
        file: 'build/bundle.js',
        sourcemap: true,
    },
};

export default config;
