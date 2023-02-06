<template>
  <div class="py-5 my-5">
    <b-form @submit="onClick()" @reset="" class="text-ligth">
      <b-row>
        <b-col lg="6">
          <div class="error">
            <p class="m-0 ms-5" v-if="error.title1">{{ error.title1 }}!</p>
          </div>
          <Input
            v-model="data.title1"
            :placeholder="$t('Forms.Full Name and position')"
            class=""
          />
          <div class="error">
            <p class="m-0 ms-5" v-if="error.title">{{ error.title }}!</p>
          </div>
          <Input
            v-model="data.title"
            :placeholder="$t('Forms.Title')"
            @keyup="validateInput"
          />
        </b-col>
        <b-col lg="6">
          <div class="error">
            <p class="m-0 ms-5" v-if="error.body">{{ error.body }}!</p>
          </div>
          <b-form-textarea
            id="textarea"
            v-model="data.body"
            :placeholder="$t('Forms.Enter Text')"
            rows="4"
            max-rows="6"
            @keyup="validateInput"
            class="rounded-5 p-2 ps-4 mb-3 text-light border-primary bg-primary"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-col>
        <b-button pill type="submit" variant="secondary" class="w-25" size="lg">
          {{ $t('General.Send') }}
        </b-button>
      </b-col>
    </b-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Input from '@/components/utils/Input.vue';
import useFormValidation from '@/plugins/useFormValidation';
export type Err = {
  [key: string]: string;
};

const data = reactive({
  title: '',
  body: '',
  title1: '',
});

const error: Err = reactive({});

const validateInput = (fieldName: string, fieldValue: string) => {
  error[fieldName] = fieldValue === '' ? 'The ' + fieldName + ' field is required' : '';
};

const onClick = () => {
  console.log(data);

  data.title = '';
  data.body = '';
  data.title1 = '';
};
</script>

<style scoped>
.error {
  min-height: 30px;
}
</style>
