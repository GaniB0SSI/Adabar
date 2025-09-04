<script>
  export let data;
  export let form;
  const products = data.products;
</script>

<h1 class="text-3xl font-bold mb-6">Admin Dashboard</h1>

<!-- Add new product -->
<div class="bg-white shadow rounded-xl p-4 mb-8">
  <h2 class="text-xl font-semibold mb-4">Add New Product</h2>
  <form method="POST" class="grid gap-4">
    <input type="text" name="title" placeholder="Title" class="border p-2 rounded" required />
    <textarea name="description" placeholder="Description" class="border p-2 rounded"></textarea>
    <input type="number" step="0.01" name="price" placeholder="Price" class="border p-2 rounded" required />
    <input type="text" name="image_url" placeholder="Image URL" class="border p-2 rounded" />

    <button
      type="submit"
      formaction="?/insert"
      class="bg-green-600 text-white px-4 py-2 rounded"
    >
      Add Product
    </button>
  </form>
</div>

<!-- List and manage products -->
{#if products.length > 0}
  <div class="space-y-6">
    {#each products as product}
      <div class="bg-white shadow rounded-xl p-4">
        <form method="POST" class="grid gap-2 md:grid-cols-2" style="align-items: start;">
          <input type="hidden" name="id" value={product.id} />

          <div class="col-span-2 md:col-span-1">
            <label class="block text-sm font-medium">Title</label>
            <input type="text" name="title" value={product.title} class="border p-2 w-full rounded" />
          </div>

          <div class="col-span-2 md:col-span-1">
            <label class="block text-sm font-medium">Price</label>
            <input type="number" step="0.01" name="price" value={product.price} class="border p-2 w-full rounded" />
          </div>

          <div class="col-span-2">
            <label class="block text-sm font-medium">Description</label>
            <textarea name="description" class="border p-2 w-full rounded">{product.description}</textarea>
          </div>

          <div class="col-span-2">
            <label class="block text-sm font-medium">Image URL</label>
            <input type="text" name="image_url" value={product.image_url} class="border p-2 w-full rounded" />
          </div>

          <div class="flex gap-2 col-span-2 mt-2">
            <button
              type="submit"
              formaction="?/edit"
              class="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>

            <button
              type="submit"
              formaction="?/delete"
              class="bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    {/each}
  </div>
{:else}
  <p>No products found.</p>
{/if}
