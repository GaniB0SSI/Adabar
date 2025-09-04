<script>
  // no need to import app.css here, just do it once in +layout.svelte root
  import '../app.css';

  // in Svelte 5, child content is passed as `children`
  export let children;
</script>

<div class="min-h-screen flex flex-col bg-gray-50">
  <!-- Header -->
  <header class="bg-white shadow">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-blue-600">Adabar</a>

      <nav class="flex gap-6">
        <a href="/" class="hover:text-blue-600">Home</a>
        <a href="/admin" class="hover:text-blue-600">Admin</a>
      </nav>
    </div>
  </header>

  <!-- Main content -->
  <main class="flex-grow max-w-6xl mx-auto px-6 py-8">
    {@render children()}
  </main>

  <!-- Footer -->
  <footer class="bg-white border-t mt-8">
    <div class="max-w-6xl mx-auto px-6 py-4 text-center text-gray-600">
      © {new Date().getFullYear()} Adabar. All rights reserved.
    </div>
  </footer>
</div>
