<script>
    let { data } = $props();
</script>

<div class="p-4">
    <h1 class="text-4xl text-center font-semibold mb-4">Cats</h1>
    <hr />
</div>

<div class="p-4">
    <button
        type="button"
        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mb-6"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-static-backdrop-modal"
        data-hs-overlay="#hs-static-backdrop-modal"
    >
        Add cat
    </button>

    <div
        id="hs-static-backdrop-modal"
        class="hs-overlay [--overlay-backdrop:static] hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabindex="-1"
        aria-labelledby="hs-static-backdrop-modal-label"
        data-hs-overlay-keyboard="false"
    >
        <div
            class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
        >
            <form method="POST" action="?/add">
                <div
                    class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto"
                >
                    <div
                        class="flex justify-end items-center py-3 px-4 border-b"
                    >
                        <button
                            type="button"
                            class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                            aria-label="Close"
                            data-hs-overlay="#hs-static-backdrop-modal"
                        >
                            <span class="sr-only">Close</span>
                            <svg
                                class="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                style="--darkreader-inline-stroke: currentColor;"
                                data-darkreader-inline-stroke=""
                            >
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="p-4 overflow-y-auto">
                        <div class="max-w-sm space-y-3">
                            <!-- Floating Input -->
                            <div class="relative">
                                <input
                                    type="text"
                                    id="hs-floating-input-email"
                                    class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6

    autofill:pb-2"
                                    placeholder="name"
                                    name="name"
                                    required
                                />

                                <label
                                    for="hs-floating-input-email"
                                    class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none

      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500">Name</label
                                >
                            </div>
                            <!-- End Floating Input -->

                            <!-- Floating Input -->
                            <div class="relative">
                                <input
                                    type="text"
                                    id="hs-floating-input-passowrd"
                                    class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6

    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2"
                                    placeholder="description"
                                    name="description"
                                    required
                                />
                                <label
                                    for="hs-floating-input-passowrd"
                                    class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5

      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500">Description</label
                                >
                            </div>
                            <!-- End Floating Input -->
                        </div>
                    </div>

                    <div
                        class="flex justify-end items-center gap-x-2 py-3 px-4 border-t"
                    >
                        <button
                            type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            data-hs-overlay="#hs-static-backdrop-modal"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="flex flex-row gap-3">
        {#each data.cats as cat}
            <div
                class="flex flex-col bg-white border shadow-sm rounded-xl"
            >
                <img
                    class="h-auto rounded-t-xl w-[400px]"
                    src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                    alt="Card Image"
                />
                <div class="p-2 md:p-3">
                    <h3 class="text-lg font-bold text-gray-800">
                        { cat.catName }
                    </h3>
                    <p class="mt-1 text-gray-500">
                        { cat.catDescription }
                    </p>
                    <form method="POST" action="?/deleteCat">
                        <input type="text" value={ cat.id } name="catId" class="hidden" />
                        <button type="submit"
                            id="delete-cat"
                            class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                            value={ cat.id }
                        >
                                Delete cat
                        </button>
                    </form>
                </div>
            </div>
        {/each}
    </div>
</div>
