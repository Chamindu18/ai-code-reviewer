// Import the generated client from the custom output folder (specified in schema.prisma)
// Adjust the relative path if necessary
import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// The database connection string is required for the adapter
const connectionString = process.env.DATABASE_URL!;

// Create the adapter
const adapter = new PrismaPg({ connectionString });

// Create the Prisma client with the adapter
export const prisma = new PrismaClient({ adapter });