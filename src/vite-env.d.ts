/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Webhook (e.g. n8n) that receives quote requests and creator applications as JSON. */
  readonly VITE_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
