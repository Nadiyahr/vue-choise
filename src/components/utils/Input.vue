<template>
  <b-form-input
    v-model="model"
    :placeholder="placeholder"
    class="rounded-pill p-2 ps-4 text-light border-primary"
    :class="bg"
  ></b-form-input>
</template>

<script setup lang="ts">
import useFormValidation from "@/plugins/useFormValidation";
import { ref } from "vue";

interface Props {
  // validator: () => {
  //   errors: Err;
  //   validateNameField: (fieldName: string, fieldValue: string) => void;
  // };
  placeholder: string;
  bg?: string;
}

const props = withDefaults(defineProps<Props>(), {
  bg: "bg-primary",
});

const model = ref("");
// let error = ref("");
// const validateInput = () => {
//   error.value = model.value === "" ? "The Input field is required" : "";
//   console.log(error.value);
// };

// let input = ref("");
// const { validateNameField, error } = useFormValidation();
// const validateInput = () => {
//   validateNameField("name", model.value);
//   console.log(model.value === "");
// };
</script>
