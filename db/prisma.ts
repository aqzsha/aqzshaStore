import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// Указываем WebSocket-конструктор для Neon
neonConfig.webSocketConstructor = ws;
const connectionString = process.env.DATABASE_URL;

// Создаём пул соединений
const pool = new Pool({ connectionString });

// Создаём адаптер для Prisma
const adapter = new PrismaNeon(pool);

export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
