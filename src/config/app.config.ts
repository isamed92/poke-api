export const appConfig = () => ({
  environment: process.env.NODE_ENV || 'dev',
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT || 3000,
  defaultLimit: process.env.DEFAULT_LIMIT || 2,
});
