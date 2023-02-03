import { reactive } from "@vue/reactivity";

export type Err = {
  [key: string]: string;
}
const error: Err = reactive({});

export default function useFormValidation() {
  const validateNameField = (fieldName: string, fieldValue: string) => {
    // console.log(error);
    
    error[fieldName] = fieldValue === "" ? "The " + fieldName + " field is required" : "";
    console.log(error);
  }

  return { error, validateNameField }
}
