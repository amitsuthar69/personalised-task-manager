// Create a file, e.g., env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_WEATHER_API_KEY: string;
  }
}
