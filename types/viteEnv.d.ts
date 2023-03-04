interface ViteEnv {
  VITE_ROUTER_AUTOLOAD: Boolean
  VITE_API_URL: string
}

interface ImportMetaEnv extends ViteEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
