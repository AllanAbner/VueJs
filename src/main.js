import Vue from 'vue'
// import App from '.App.vue'
import VueResource from 'vue-resource' 
import Home from '../src/paginas/home.vue'

Vue.use(VueResource)
const Contato = {template: '<p>página de contato</p>'}
const SemPagina = {template: '<p>Página invalida :(</p>'}

const rotas = 
{
  '/' : Home,
  '/contato': Contato
}
new Vue({
  el: '#app',
  data:
  {
    rotaAtual:window.location.pathname

  },
  computed:  
  {
    exibeComponente()
    {
      return rotas[this.rotaAtual] || SemPagina;
    }

  },
  render( h){return h(this.exibeComponente) }
})
