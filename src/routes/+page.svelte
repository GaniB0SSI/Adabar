<script>
  export let data;
  const products = data.products;
</script>

<div class="p-6">
  <h1 class="text-3xl font-bold mb-6">Adabar Store</h1>

  {#if products.length > 0}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {#each products as product}
        <div class="bg-white rounded-2xl shadow p-4 flex flex-col">
          <img
            src={product.image_url}
            alt={product.title}
            class="rounded-xl h-48 object-cover mb-4"
          />
          <h2 class="text-xl font-semibold">{product.title}</h2>
          <p class="text-gray-600 flex-grow">{product.description}</p>
          <p class="text-lg font-bold mt-2">${product.price}</p>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-gray-500">No products available yet.</p>
  {/if}
</div>
