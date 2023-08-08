<template>
  <div>
    <input type="text" :value="firstName" @input="handleFirstName" />
    <input type="text" :value="lastName" @input="handleLastName" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  firstName: String,
  lastName: String,
  firstNameModifiers: { default: () => ({}) },
  lastNameModifiers: { default: () => ({}) },
});

const emit = defineEmits(["update:firstName", "update:lastName"]);

function handleFirstName(e: Event) {
  let value = (e.currentTarget as HTMLInputElement).value;
  if (value.length > 0 && props.firstNameModifiers?.capitalize) {
    value = value[0].toUpperCase() + value.slice(1);
  }

  emit("update:firstName", value);
}

function handleLastName(e: Event) {
  let value = (e.currentTarget as HTMLInputElement).value;
  if (value.length > 0 && props.lastNameModifiers?.uppercase) {
    value = value.toUpperCase();
  }

  emit("update:lastName", value);
}
</script>

<style scoped></style>
