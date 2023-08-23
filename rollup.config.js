import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'react-component-wrappers/src/generated/components.ts',
    output: {
        file: 'dist/all-components.bundle.js', // Adjust the output file path
        format: 'iife', // Output format as an Immediately Invoked Function Expression
        name: 'allthings', // Global variable name for the component
        globals: {
            react: 'React', // External dependency globals
            'react-dom': 'ReactDOM'
        }
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        babel({
            presets: ['@babel/preset-react']
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production') // Replace with appropriate value
        })
    ],
    external: ['react', 'react-dom']
};
