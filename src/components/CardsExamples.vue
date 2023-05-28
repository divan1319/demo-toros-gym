<template>
<section class="p-6">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Carta de Usuarios Activos -->
      <div class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg rounded-lg p-6">
        <h3 class="text-lg font-semibold mb-4">Usuarios Activos</h3>
        <p class="text-xl font-bold">25</p>
        <p class="text-sm">Usuarios activos en este momento</p>
      </div>

      <!-- Carta de Gastos del Mes -->
      <div class="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg rounded-lg p-6">
        <h3 class="text-lg font-semibold mb-4">Gastos del Mes</h3>
        <p class="text-xl font-bold">$10,000</p>
        <p class="text-sm">Gastos acumulados este mes</p>
      </div>

      <!-- Carta de Tareas Pendientes -->
      <div class="bg-gradient-to-r from-yellow-400 to-red-500 text-white shadow-lg rounded-lg p-6">
        <h3 class="text-lg font-semibold mb-4">Sucripciones nuevas</h3>
        <p class="text-xl font-bold">3</p>
        <p class="text-sm">Sucripciones nuevas</p>
      </div>
    </div>
  </div>
</section>
<TodoList/>
</template>

<script>
import TodoList from "../components/TodoList.vue";
export default {
components:{
TodoList
}
}
</script>

