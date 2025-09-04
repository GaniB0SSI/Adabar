<script>
  export let form;
</script>

<h1 class="text-2xl font-bold mb-4">Login</h1>

<form action="?/login" method="POST" class="flex flex-col gap-3 max-w-sm w-full">
 
  <div class="flex flex-col">
    <label for="email" class="mb-1 font-medium">Email</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      placeholder="you@example.com" 
      class="border p-2 rounded" 
      required
    />
  </div>

 
  <div class="flex flex-col">
    <label for="password" class="mb-1 font-medium">Password</label>
    <input 
      type="password" 
      id="password" 
      name="password" 
      placeholder="********" 
      class="border p-2 rounded" 
      required
    />
  </div>

 
  <button 
    type="submit" 
    class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
  >
    Login
  </button>

  
  <div class="flex justify-between text-sm mt-2">
    <a href="/forgot-password" class="text-blue-600 hover:underline">Forgot password?</a>
    <a href="/register" class="text-blue-600 hover:underline">Create account</a>
  </div>
</form>


{#if form?.error}
  <p class="text-red-600 mt-2">{form.error}</p>
{/if}
