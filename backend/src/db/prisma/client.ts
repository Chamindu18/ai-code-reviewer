// Import the generated client from the custom output folder (specified in schema.prisma)
// Adjust the relative path if necessary
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '../../generated/prisma/client';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Create the adapter
const adapter = new PrismaPg(pool);

// Create the Prisma client with the adapter
export const prisma = new PrismaClient({ adapter });