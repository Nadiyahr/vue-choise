<template>
  <section class="bg-primary text-light py-4">
    <b-container fluid class="mt-3">
      <b-row>
        <b-col sm="12" md="8">
          <div class="py-4">
            <h2 class="text-white fw-bolder">
              {{ $t("Subscribe.Subscribe title") }}
            </h2>
            <p class="fs-4">
              {{ $t("Subscribe.Subscribe paragraph") }}
            </p>
          </div>
        </b-col>
        <b-col>
          <b-form @submit="" @reset="" class="py-4 text-ligth">
            <Input
              :model="model"
              :placeholder="$t('Forms.Name')"
              bg="bg-dark"
              class="mb-3"
            />
            <b-button
              pill
              type="submit"
              variant="secondary"
              text-variant="light"
              class="w-100 text-light"
            >
              {{ $t("Subscribe.Register to Newsletter") }}
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Input from "@/components/utils/Input.vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    return emit("update:modelValue", value);
  },
});
</script>
