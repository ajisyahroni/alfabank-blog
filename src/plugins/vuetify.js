import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#294053',
                secondary: '#b0bec5',
                accent: '#ffffff',
                error: '#b71c1c',
                greenfy:'#2be0a7',
                whitefy:'#e8f3fc'
            },
        },
    },
});
