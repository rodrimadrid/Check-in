 const vm = new Vue({
  mounted() {
    if (window.localStorage.getItem('contacto'))
    this.contacto = JSON.parse(window.localStorage.getItem('contacto'))
  },
  el: '#app',
  data: {
    contacto:{
      nombre: '',
      edad: '',
      lugar: '',
      email:'',
      expectativas: ''
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
