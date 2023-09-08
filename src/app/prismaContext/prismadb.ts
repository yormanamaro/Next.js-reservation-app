// Esto siempre de hace igual en cualquier proyecto.

import { PrismaClient } from "@prisma/client";

declare global { // se declara un espacio de trabajo global
  var prisma: PrismaClient | undefined; // va a estar definido por un cliente prisma o undefined
}

const client = globalThis.prisma || new PrismaClient(); // contexto global de clases y si no una nueva instancia.

if (process.env.NODE_ENV !== "production") { // condicional para la ejecucion del codigo anterior. 
  globalThis.prisma = prisma;
}

export default client;