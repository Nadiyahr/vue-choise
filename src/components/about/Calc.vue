<template>
  <div class="calc-wraper">
    <div class="calc-screen calc-row">
      <div>{{ inputRef }}</div>
      <!-- <input :value="model" type="text" placeholder="0" /> -->
      <!-- <input :value="screenValue" type="text" placeholder="0" disabled /> -->
    </div>
    <div class="calc-row">
      <button class="btn-global" @click.prevent="eventHandler" value="7" type="input">
        7
      </button>
      <button class="btn-global" @click="eventHandler" value="8" type="input">8</button>
      <button class="btn-global" @click="eventHandler" value="9" type="input">9</button>
      <button class="btn-global" @click="eventHandler" value="*" type="action">*</button>
    </div>
    <div class="calc-row">
      <button class="btn-global" @click="eventHandler" value="4" type="input">4</button>
      <button class="btn-global" @click="eventHandler" value="5" type="input">5</button>
      <button class="btn-global" @click="eventHandler" value="6" type="input">6</button>
      <button class="btn-global" @click="eventHandler" value="-" type="action">-</button>
    </div>
    <div class="calc-row">
      <button class="btn-global" @click="eventHandler" value="1" type="input">1</button>
      <button class="btn-global" @click="eventHandler" value="2" type="input">2</button>
      <button class="btn-global" @click="eventHandler" value="3" type="input">3</button>
      <button class="btn-global" @click="eventHandler" value="+" type="action">+</button>
    </div>
    <div class="calc-row">
      <button class="btn-global" @click="eventHandler" value="0" type="input">0</button>
      <button class="btn-global" @click="eventHandler" value="." type="input">.</button>
      <button class="btn-global" @click="eventHandler" value="=" type="action">=</button>
      <button class="btn-global" @click="eventHandler" value="/" type="action">/</button>
    </div>
    <div class="calc-row last-row">
      <button class="btn-global" @click="reset" type="action">C</button>
      <button class="btn-global" type="action">UNDO</button>
      <button class="btn-global" type="action">REDO</button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

let apply = true;
// eslint-disable-next-line no-undef
// const props = defineProps({
//   modelValue: {
//     type: [String, Number],
//     default: "",
//   },
// });

// // eslint-disable-next-line no-undef
// const emit = defineEmits(["update:modelValue"]);
// let model = computed({
//   get() {
//     return props.modelValue;
//   },
//   set(value) {
//     console.log(value);
//     return emit("update:modelValue", value);
//   },
// });

const inputRef = ref("");

const eventHandler = (event) => {
  const btnValue = event.target.value;
  console.log(btnValue);
  const regPoint = /\./;
  const regNumbers = /[1-9]/;
  const regOperator = /\+|-|\*|\//;

  inputRef.value += btnValue;

  console.log(model);

  // if (model.value.length === 0) {
  //   if (regPoint.test(btnValue)) {
  //     model.value = "0" + btnValue;
  //   } else if (regNumbers.test(btnValue)) {
  //     inputRef.value = btnValue;
  //   }
  // } else if (
  //   btnValue !== "C" &&
  //   btnValue !== "UNDO" &&
  //   btnValue !== "REDO" &&
  //   model.value.length >= 1
  // ) {
  //   if (regPoint.test(btnValue) && apply) {
  //     if (!regPoint.test(model.value)) {
  //       model.value += btnValue;
  //     } else {
  //       const symbol = model.value.match(regOperator)[0];
  //       const arr = model.value.split(symbol);
  //       if (arr[1].length === 0 && !regPoint.test(arr[1])) {
  //         arr[1] = "0." + arr[1];
  //       } else if (!regPoint.test(arr[1])) {
  //         arr[1] += btnValue;
  //       }
  //       model.value = arr.join(symbol);
  //     }
  //   } else if (/\+|-|\*|\/|=/.test(btnValue)) {
  //     if (!regOperator.test(model.value) && btnValue !== "=") {
  //       model.value += btnValue;
  //       !apply ? (apply = true) : apply;
  //     } else {
  //       model.value = "" + eval(model.value);
  //       apply = false;
  //     }
  //   } else if (apply) {
  //     model.value += btnValue;
  //   }
  // }
};
</script>
