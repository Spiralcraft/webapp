import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
// import multiInput from 'rollup-plugin-multi-input';
import cloneDeep from 'clone-deep';
import replace from '@rollup/plugin-replace';
import path from 'path';
import vfs from '../lib-js/spiralcraft/rollup-vfs/rollup-vfs.js';


const production = true;

const template= {
  output: {
    sourcemap: true,
    format: 'esm',
    name: "applet"
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css: css => {
        css.write("applet.css");
        
        }
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte','svelte/internal',,'svelte/transition'],
      customResolveOptions: {
        moduleDirectory: path.resolve('node_modules')
      }      
    }),
    vfs({ srcRoot: 'src-js/system'}),
    alias({
      resolve: ['.js','.svelte'],
      entries: [
        {
          find: '@spiralcraft',
          replacement: path.resolve(__dirname, '../lib-js/spiralcraft')
        },
        {
          find: 'svelte',
          replacement: path.resolve('node_modules','svelte')
        }        
      ]
    }),
    commonjs(),

    // For popper.js / bs tooltips and other things that make this
    //   assumption based on running in node
    replace({
     'process.env.NODE_ENV': JSON.stringify('production'),
     include: '**/node_modules/**',
     preventAssignment: true
    }),  
    
    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ]
};
  


const system= cloneDeep(template);
system.input="../src-js/system/app/applet.js";
system.output.dir="../package/war-js/system";

export default [system];
