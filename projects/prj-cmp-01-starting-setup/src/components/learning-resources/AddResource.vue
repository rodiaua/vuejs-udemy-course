<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="closeDialog()">
    <template #default>
      <p>At least on input value is invalid.</p>
      <p>Please check if all input fields are filled.</p>
    </template>
    <template #actions>
      <base-button @click="closeDialog()">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData()">
      <div class="form-control">
        <label for="title">Title</label>
        <input v-model="title" id="title" name="title" type="text">
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea v-model="description" id="description" name="description" rows="3"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input v-model="link" id="link" name="link" type="url">
      </div>
      <div>
        <base-button type="submit">
          Add Resource
        </base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      link: '',
      inputIsInvalid: false
    }
  },
  inject: ['addResource'],
  emits: ['resource-added'],
  methods: {
    submitData() {
      if (this.title.trim() === '' || this.description === '' || this.link.trim() === '') {
        this.inputIsInvalid = true;
        return;
      }
      this.addResource({ id: new Date().toISOString(), title: this.title, description: this.description, link: this.link })
    },
    closeDialog(){
      this.inputIsInvalid = false;
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>