<template>
  <div>
    <header>
      <slot name="header" />
    </header>
    <hr />
    <main>
      <slot name="main" />
    </main>
    <hr />
    <footer>
      <slot name="footer" />
    </footer>

    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
