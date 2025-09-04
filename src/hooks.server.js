import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
  const isAdminRoute = event.url.pathname.startsWith('/admin');
  const isAdmin = event.cookies.get('admin');

  if (isAdminRoute && event.url.pathname !== '/admin/login') {
    if (!isAdmin) {
      throw redirect(303, '/admin/login');
    }
  }

  return resolve(event);
}
