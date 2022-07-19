import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import analyze from 'rollup-plugin-analyzer'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      exports: 'named',
      file: packageJson.main,
      format: 'esm',
      sourcemap: true
    },
    {
      name: 'ReactLibraryStarter',
      file: packageJson.unpkg,
      format: 'umd',
      globals: {
        react: 'React',
        'cross-fetch': 'fetch',
        'url-join': 'urljoin',
        swr: 'useSWR'
      }
    }
  ],
  watch: {
    include: 'src/**/*'
  },
  plugins: [
    peerDepsExternal(),
    url(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      rollupCommonJSResolveHack: false,
      clean: true
    }),
    analyze()
  ],
  external: ['react', 'cross-fetch', 'swr', 'url-join']
}
