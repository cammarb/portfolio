declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BLOG_API: string;
    }
  }
}

export {};
