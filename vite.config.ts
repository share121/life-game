import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
  VueUseComponentsResolver,
  VueUseDirectiveResolver
} from 'unplugin-vue-components/resolvers'

// 兼容性处理
import browserslist from 'browserslist'
import legacy from '@vitejs/plugin-legacy'

// 文件分割
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

// 打包占用分析
import { visualizer } from 'rollup-plugin-visualizer'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import Inspect from 'vite-plugin-inspect'

// 加载 .browserslistrc 文件
const browserslistConfig = browserslist.loadConfig({ path: '.' })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        'pinia',
        {
          axios: [['default', 'axios']]
        },
        {
          'lodash-es': [['default', '_']]
        }
      ],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      dts: true,
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: false,
          enabledCollections: ['ep']
        }),
        ElementPlusResolver(),
        VueUseComponentsResolver(),
        VueUseDirectiveResolver()
      ],
      dts: true
    }),
    Icons({
      autoInstall: true
    }),
    legacy({
      ignoreBrowserslistConfig: true,
      modernPolyfills: true,
      targets: browserslistConfig,
      // 面向IE11时需要此插件
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    chunkSplitPlugin({
      // 文件分割方式
      strategy: 'all-in-one'
    }),
    visualizer(),
    Inspect({
      build: true,
      outputDir: '.vite-inspect'
    })
  ],
  css: {
    postcss: {
      plugins: [require('postcss-preset-env')({ stage: 4, minimumVendorImplementations: 3 })]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/life-game/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false,
    strictPort: true
  },
  preview: {
    port: 4000
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
