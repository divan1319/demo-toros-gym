<template>
<div class="bg-gray-100">
    <h2 class="text-xl font-bold md:mx-10 p-5">Tareas pendientes:</h2>
  <div class="container mx-auto py-8">
    <div class="max-w-3xl mx-auto">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <ul class="divide-y divide-gray-200">
          <!-- Tareas -->
          <li class="px-4 py-3">
            <div class="flex items-start">
              <span class="inline-block w-4 h-4 rounded-full mt-1 mr-3 bg-purple-500"></span>
              <div class="flex-grow">
                <p class="text-gray-800 font-semibold">Gestionar cuentas de clientes</p>
                <p class="text-sm text-gray-600">Mantener una comunicación regular con los clientes y asegurarse de que sus necesidades sean atendidas.</p>
              </div>
            </div>
          </li>
          <li class="px-4 py-3">
            <div class="flex items-start">
              <span class="inline-block w-4 h-4 rounded-full mt-1 mr-3 bg-blue-500"></span>
              <div class="flex-grow">
                <p class="text-gray-800 font-semibold">Desarrollar estrategias de marketing</p>
                <p class="text-sm text-gray-600">Crear y ejecutar planes de marketing para promocionar los productos y servicios de la empresa.</p>
              </div>
            </div>
          </li>
          <li class="px-4 py-3">
            <div class="flex items-start">
              <span class="inline-block w-4 h-4 rounded-full mt-1 mr-3 bg-yellow-500"></span>
              <div class="flex-grow">
                <p class="text-gray-800 font-semibold">Gestionar el ciclo de ventas</p>
                <p class="text-sm text-gray-600">Identificar oportunidades de ventas, realizar seguimiento a los prospectos y cerrar acuerdos comerciales.</p>
              </div>
            </div>
          </li>
          <li class="px-4 py-3">
            <div class="flex items-start">
              <span class="inline-block w-4 h-4 rounded-full mt-1 mr-3 bg-green-500"></span>
              <div class="flex-grow">
                <p class="text-gray-800 font-semibold">Supervisar el equipo de trabajo</p>
                <p class="text-sm text-gray-600">Brindar orientación y apoyo al equipo, asignar tareas y garantizar el cumplimiento de objetivos.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


</template>
