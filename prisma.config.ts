import 'dotenv/config'
import { defineConfig } from '@prisma/config' // Verifique se sua versão exporta daqui ou use o padrão

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx ./prisma/seed.ts'
  },
  datasource: {
    // Para SQLite local, usamos file:
    url: process.env.DATABASE_URL, 
  },
})