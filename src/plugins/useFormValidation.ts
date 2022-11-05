import { reactive } from "@vue/reactivity";

export type Err = {
  [key: string]: string;
}
const errors: Err = reactive({});

export default function useFormValidation() {
  const validateNameField = (fieldName: string, fieldValue: string) => {
    errors[fieldName] = fieldValue === "" ? "The " + fieldName + " field is required" : "";
  }
  return { errors, validateNameField }
}
