import { defineConfig, presetAttributify, presetIcons, presetUno, transformerAttributifyJsx } from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
  safelist: [
    'grow-0.6',
    'grow-5',
    'op100',
    'op0',
    'w-80px',
    'w-0',
    'h-4px',
    'bg-gray',
    'bg-blue',
    'border-gray',
    'border-blue',
    '-translate-x-120px',
    '-translate-x-140px',
    '-translate-x-190px',
    '-rotate-18',
    '-rotate-90',
  ],
})
