<template>
  <div>
    <v-app>
      <AppHeader />
      <v-main>
        <v-container>
          <slot />
        </v-container>
      </v-main>
      <AppFooter />
    </v-app>
  </div>
</template>