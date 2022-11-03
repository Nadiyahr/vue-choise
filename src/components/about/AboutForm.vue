<template>
  <div class="py-5 my-5">
    <b-form @submit="onClick()" @reset="" class="text-ligth">
      <b-row>
        <b-col lg="6">
          <Input
            v-model="data.title1"
            placeholder="Full Name and position"
            class="mb-4"
          />
          <Input v-model="data.title" placeholder="Title" />
        </b-col>
        <b-col lg="6">
          <b-form-textarea
            id="textarea"
            v-model="data.body"
            placeholder="Enter Text"
            rows="4"
            max-rows="6"
            class="rounded-5 p-2 ps-4 mb-3 text-light border-primary bg-primary"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-col>
        <b-button pill type="submit" variant="secondary" class="w-25" size="lg">
          Send
        </b-button>
      </b-col>
    </b-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Input from "@/components/utils/Input.vue";

const data = reactive({
  title: "",
  body: "",
  title1: "",
});

const onClick = () => {
  console.log(data);

  data.title = "";
  data.body = "";
  data.title1 = "";
};
</script>

<style scoped></style>
