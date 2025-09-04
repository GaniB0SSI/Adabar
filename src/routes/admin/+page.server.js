import { createConnection } from '$lib/db/mysql.js';

export async function load() {
  const connection = await createConnection();
  const [products] = await connection.query('SELECT * FROM products ORDER BY created_at DESC');
  return { products };
}

export const actions = {
  insert: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get('title');
    const description = formData.get('description');
    const price = formData.get('price');
    const image_url = formData.get('image_url');

    const connection = await createConnection();
    await connection.query(
      'INSERT INTO products (title, description, price, image_url, created_at) VALUES (?, ?, ?, ?, NOW())',
      [title, description, price, image_url]
    );

    return { success: true };
  },

  edit: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get('id');
    const title = formData.get('title');
    const description = formData.get('description');
    const price = formData.get('price');
    const image_url = formData.get('image_url');

    const connection = await createConnection();
    await connection.query(
      'UPDATE products SET title=?, description=?, price=?, image_url=? WHERE id=?',
      [title, description, price, image_url, id]
    );

    return { success: true };
  },

  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get('id');

    const connection = await createConnection();
    await connection.query('DELETE FROM products WHERE id = ?', [id]);

    return { success: true };
  }
};
