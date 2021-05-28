Vue.component('formulario', {
  props: ['value'],
  template:
  `
    <div class="form-group">
      <label :for="id">
        <slot></slot>
      </label>
      <input class="form-control"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      type="text" :id="id">
    </div>
  `,
  data(){
    return {
      id: `input-${Math.floor(Math.random() + 10) + 1}`
    }
  }
})


 const vm = new Vue({
  mounted() {
    if (window.localStorage.getItem('contacto'))
    this.contacto = JSON.parse(window.localStorage.getItem('contacto'))
  },
  el: '#main',
  data: {
      contacto:{
      nombre: '',
      edad: '',
      lugar: '',
      email:'',
      expectativas: '',
      newsletter: null
    }
  },
  methods: {
    vaciarLocalStorage(){
      return localStorage.clear()
    }
  }

});

vm.$watch('contacto', (val)=>{
window.localStorage.setItem('contacto', JSON.stringify(val))
},{deep : true})

///////////////////////
