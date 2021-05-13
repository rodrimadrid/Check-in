Vue.component('pasajes', {
  template:
  `

    <div id="mp" class="pago">
      <h2>Sumate a esta experiencia!</h2>
      <p>Consegui tu pasasje acá!</p>
      <script src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
      data-preference-id="217174733-c52ea558-d533-4611-ba0d-3b5c880e6158"
      data-source="button" target="_blank">
      </script>


    </div>
  `

})
Vue.component('card', {
  props: ['card'],
  template:
  `
  <div>
    <div
      class="d-flex flex-column justify-content-center align-items-center"
      :class="card.bg"
      style='height: 13em'
      >
      <div class="text-center">
        <h3 class="viaje--pregunta">{{card.pregunta}}</h3>
      </div>
      <button @click="toggleBtn" v-if="!boton" class='text-center w-25 btn mt-4' :class="card.btn">INICIAR</button>
      <button @click="toggleBtn" v-else class='text-center w-25 btn mt-4' :class="card.btn">VOLVER</button>
    </div>
    <iframe v-if="boton"
     src="https://docs.google.com/forms/d/e/1FAIpQLSfDtLxxOF-etxY9S8x_pG1-w_HvyjBJInU5OPtgVFEqesbcfw/viewform?embedded=true"
     class="google--form"
     frameborder="0" marginheight="0" marginwidth="0">
     Cargando…
    </iframe>
  </div>

  `,
  data(){
    return{
      boton: false,
      btnText: 'INICIAR'
    }
  },
  methods: {
    toggleBtn(){
    return  (this.boton == false) ? this.boton = true : this.boton = false
    }
  }

})

new Vue ({
  el: "#app",
  data: {
    cards: [
      {
        pregunta: 'Empezas el viaje?',
        bg: 'bg-ciudad',
        btn: 'btn-success',
     }

     ]
  }
})
