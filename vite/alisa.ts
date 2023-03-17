//vite快捷键
import path from 'path'
import { AliasOptions } from 'vite'
const alisa = { '@': path.resolve(__dirname, '../src'), '#': path.resolve(__dirname, '../types') } as AliasOptions
export default alisa
