<template>
  <div class="container mx-auto">
    <h2 class="text-xl font-bold my-8 text-center">Nueva Suscripcion</h2>
    <form class="bg-white rounded-lg shadow-lg p-8">
      <div class="grid grid-cols-1 gap-4">
        <div class="col-span-1">
          <label class="block mb-2 text-gray-800" for="input1">Nombre:</label>
          <input type="text" id="input1" class="border border-gray-300 rounded-lg py-2 px-4 w-full" placeholder="Ej. Kevin Martinez">
        </div>
        <div class="col-span-2 grid grid-cols-2 gap-4">
          <div>
            <label class="block mb-2 text-gray-800" for="input2">Edad</label>
            <input type="number" id="input2" class="border border-gray-300 rounded-lg py-2 px-4 w-full" placeholder="Ej. 25">
          </div>
          <div>
            <label class="block mb-2 text-gray-800" for="input3">Peso Actual</label>
            <input type="number" id="input3" class="border border-gray-300 rounded-lg py-2 px-4 w-full" placeholder="Ej. 170lb">
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
      <button class=" bg-cyan-600 mt-5 py-2 px-2 md:w-32 w-full text-white font-extrabold text-sm rounded-lg">Agregar</button>
    </form>
  </div>
</template>
