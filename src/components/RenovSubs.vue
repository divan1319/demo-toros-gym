<template>
  <div class="container mx-auto mt-5">
    <div class="bg-white rounded-lg shadow-md p-8">
      <div class="flex">
        <input
          type="text"
          class="border border-gray-300 rounded-l-lg py-2 px-4 w-full"
          placeholder="Buscar Usuario"
        />
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg">
          Buscar
        </button>
      </div>
    </div>
    <h2 class="text-xl font-bold my-8 text-center">Renovar Suscripcion</h2>
    <form class="bg-white rounded-lg p-8">
      <div class="grid grid-cols-1 gap-4">
        <div class="col-span-1">
          <label class="block mb-2 text-gray-800" for="input1">Nombre:</label>
          <input
            type="text"
            id="input1"
            class="border border-gray-300 rounded-lg py-2 px-4 w-full"
            placeholder="Ej. Kevin Martinez"
            value="Kevin Martinez"
          />
        </div>
        <div class="col-span-1 md:col-span-3 grid md:grid-cols-3 gap-4">
          <div>
            <label class="block mb-2 text-gray-800" for="input2">Edad</label>
            <input
              type="number"
              id="input2"
              class="border border-gray-300 rounded-lg py-2 px-4 md:w-11/12 w-full"
              placeholder="Ej. 25"
              value="25"
            />
          </div>
          <div>
            <label class="block mb-2 text-gray-800" for="input3">Peso Inicial (lb)</label>
            <input
              type="number"
              id="input3"
              class="border border-gray-300 rounded-lg py-2 px-4 md:w-11/12 w-full"
              placeholder="Ej. 170lb"
              value="170"
            />
          </div>
          <div>
            <label class="block mb-2 text-gray-800" for="input3">Peso Actual (lb)</label>
            <input
              type="number"
              id="input3"
              class="border border-gray-300 rounded-lg py-2 px-4 md:w-11/12 w-full"
              placeholder="Ej. 170lb"
              value="165"
            />
          </div>
        </div>
        <div class="col-span-1">
          <label class="block mb-2 text-gray-800" for="select">Mensualidad</label>
          <select id="select" class="border border-gray-300 rounded-lg py-2 px-4 w-full">
            <option value="">Seleccionar</option>
            <option value="opcion1">$12</option>
            <option value="opcion2">$20</option>
            <option value="opcion3">$30</option>
          </select>
        </div>
      </div>
      <button
        class="bg-cyan-600 mt-5 py-2 px-2 md:w-32 w-full text-white font-extrabold text-sm rounded-lg"
      >
        Renovar
      </button>
    </form>
  </div>
</template>
