// src/routes/+page.server.js#

import { createConnection } from "$lib/db/mysql";
export async function load() {
  const connection = await createConnection();
  const [products] = await connection.execute('SELECT * FROM products ORDER BY created_at DESC');
  return { products };
}
