<script>
  import '../app.css';

  export let children;
</script>

<div class="min-h-screen flex flex-col bg-gray-50">
  <header class="bg-white shadow">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-blue-600">Adabar</a>

      <nav class="flex gap-6">
        <a href="/" class="hover:text-blue-600">About</a>
        <a href="/admin" class="hover:text-blue-600">Login</a>
      </nav>
    </div>
  </header>

 
  <main class="flex-grow max-w-6xl mx-auto px-6 py-8">
    {@render children()}
  </main>

 
  <footer class="bg-white border-t mt-8">
    <div class="max-w-6xl mx-auto px-6 py-4 text-center text-gray-600">
      © {new Date().getFullYear()} Adabar. All rights reserved.
    </div>
  </footer>
</div>
