<script>
  export let form;
</script>

<h1 class="text-2xl font-bold mb-4">Admin Login</h1>

<form action="?/login" method="POST" class="flex flex-col gap-3 max-w-sm">
  <input type="password" name="password" placeholder="Password" class="border p-2 rounded" required />
  <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
</form>

{#if form?.error}
  <p class="text-red-600 mt-2">{form.error}</p>
{/if}
