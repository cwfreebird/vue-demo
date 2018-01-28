import Vue from 'vue';
import App from './app/app.vue'

new Vue({
    el: '#app',
    render: h => h(App),
    data: {
        value: 5
    }
});