{{#if_eq build "standalone"}}
// The Kdu build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Kdu from 'kdu'
import App from './App'
{{#router}}
import router from './router'
{{/router}}

Kdu.config.productionTip = false

/* eslint-disable no-new */
new Kdu({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
