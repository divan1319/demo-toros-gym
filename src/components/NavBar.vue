<template>
  <nav class="bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <RouterLink to="/" class="text-white text-lg font-semibold">Toros Gym</RouterLink>
          </div>
          <div class="hidden md:ml-6 md:flex md:space-x-4 items-center">
            <RouterLink
            to="/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Inicio</RouterLink
            >
            <RouterLink
              to="/subs"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Suscripciones</RouterLink
            >
            <RouterLink
            to=""
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Gastos</RouterLink
            >
            <RouterLink
            to=""
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Usuarios</RouterLink
            >
          </div>
        </div>
        <div class="hidden md:flex items-center">
          <RouterLink
          to=""
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Cerrar sesión</RouterLink
          >
        </div>
        <div class="-mr-2 flex md:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icono del menú -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <!-- Icono de cierre del menú -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="md:hidden" :class="{ hidden: !isMobileMenuOpen }" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <RouterLink
        to="/"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Inicio</RouterLink
        >
        <RouterLink
          to="/subs"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Suscripciones</RouterLink
        >
        <RouterLink
        to=""
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Gastos</RouterLink
        >
        <RouterLink
        to=""
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Usuarios</RouterLink
        >
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Cerrar sesión</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
  <RouterView></RouterView>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    }
  }
}
</script>
