import env from 'env-var'

export const PORT = 5000
export const MYSQL_URL = env.get('MYSQL_URL').required().asString()
