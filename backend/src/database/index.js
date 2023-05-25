import mysql from 'mysql2'
import * as dotenv from 'dotenv'
dotenv.config()

export const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')