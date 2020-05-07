<template>
  <div>
    <b-container>
      <b-button variant="outline-primary" @click="show = !show">
        {{ show ? 'Hide' : 'Show' }} TODO form
      </b-button>
      <b-form v-show="show" @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-header" label="Your header:" label-for="input-header">
          <b-form-input
            id="input-header"
            v-model="form.header"
            required
            placeholder="Enter header"
          />
        </b-form-group>

        <b-form-group id="input-group-task" label="Your task" label-for="task">
          <b-form-textarea
            id="task"
            v-model="form.task"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          />
        </b-form-group>

        <b-form-group id="input-group-date" label="Your date:" label-for="input-date">
          <div>
            <label for="example-datepicker">Choose a date</label>
            <b-form-datepicker id="example-datepicker" v-model="form.date" class="mb-2" />
            <p>Date: '{{ form.date }}'</p>
          </div>
        </b-form-group>

        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <b-form-group id="background" label="Your background color:" label-for="background">
                <input id="background" v-model="form.background" type="color" name="background" value="#ff0000">
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6">
              <b-form-group id="text_color" label="Your text color:" label-for="text_color">
                <input id="text_color" v-model="form.color" type="color" name="text_color" value="#ff0000">
              </b-form-group>
            </b-col>
          </b-row>
        </b-container>
        <b-button type="submit" variant="primary">
          Add Todo
        </b-button>
        <b-button type="reset" variant="danger">
          reset
        </b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        header: '',
        task: '',
        date: '',
        background: '#ffffff',
        color: '#000000'
      },
      show: true
    }
  },
  methods: {
    ...mapMutations('todos', [
      'ADD_TODO'
    ]),
    ...mapActions('todos', [
      'AddTodo'
    ]),
    onSubmit (evt) {
      evt.preventDefault()
      this.AddTodo(this.form)
      Vue.set(this, 'form', {})
    },
    onReset (evt) {
      evt.preventDefault()
      Vue.set(this, 'form', {})
    }
  }
}
</script>
