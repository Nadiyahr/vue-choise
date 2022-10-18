<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get () {
    return props.modelValue
  },

  set (value) {
    return emit('update:modelValue', value)
  }
})
</script>

<template>
  <section class=" bg-primary text-light">
    <b-container fluid class="">
      <b-row>
        <b-col sm="12" md="8">
          <div class="py-4">
            <h2 class="text-ligth fw-bolder">
              Subscribe and become a part of Choicie
            </h2>
            <p class="fs-4">
              Leave your email and get all the information about product updates, 
              blog updates, exclusive updates.
            </p>
          </div>
        </b-col>
        <b-col>
          <b-form @submit="" @reset="" class="py-4 text-ligth">
            <b-form-input
              v-model="model"
              placeholder="You email"
              class="rounded-pill bg-dark mb-3 text-light"
            ></b-form-input>
            <b-button
              pill
              type="submit"
              variant="secondary"
              text-variant="light"
              class="w-100 text-light"
            >
              Register to Newsletter
            </b-button>
        </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>