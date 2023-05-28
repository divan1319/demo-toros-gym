<template>
  <div>
    <section>
      <h2 class="text-xl font-bold mx-10 p-5">Suscripciones</h2>
      <div class="container mx-auto py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- Opción 1 -->
          <div
            class="bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg rounded-lg p-6"
          >
            <h3 class="text-lg font-semibold mb-4 md:text-left text-center">Renovar Suscripcion</h3>
            <p class="text-sm"></p>
            <RouterLink to="/renov-sub"><button class="bg-cyan-700 md:w-28 w-full h-10 text-sm font-extrabold rounded-lg">
              Renovar
            </button>
          </RouterLink>
          </div>

          <!-- Opción 2 -->
          <div
            class="bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg rounded-lg p-6"
          >
            <h3 class="text-lg font-semibold mb-4 md:text-left text-center">Nueva Suscripcion</h3>
            <p class="text-sm"></p>
            <RouterLink to="/new-sub">
              <button class="bg-cyan-700 md:w-28 w-full h-9 text-sm font-extrabold rounded-lg">Agregar</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
  <RouterView/>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  components:{
    RouterLink,RouterView
  }
}
</script>
