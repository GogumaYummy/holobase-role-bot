if (process.env.NODE_ENV === 'dev') {
  const dotenv = await import('dotenv');
  dotenv.config();
}

function getEnv(key: string): string {
  const value = process.env[key];

  if (value == undefined) {
    throw new Error(`환경변수 ${key} 없음`);
  }

  return value;
}

export const NODE_ENV = getEnv('NODE_ENV');
export const BOT_TOKEN = getEnv('BOT_TOKEN');
export const GUILD_ID = getEnv('GUILD_ID');
