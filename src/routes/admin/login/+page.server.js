import { redirect } from '@sveltejs/kit';

const ADMIN_PASSWORD = '1';

export const actions = {
  login: async ({ request, cookies }) => {
    const formData = await request.formData();
    const password = formData.get('password');

    if (password === ADMIN_PASSWORD) {
      cookies.set('admin', 'true', {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 
      });

      throw redirect(302, '/admin');
    }

    return { error: 'Invalid password' };
  }
};
