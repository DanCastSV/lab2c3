

import './bootstrap';
import { createApp } from 'vue';



const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

import primero from './components/primero.vue';
app.component('primero', primero);

import dos from './components/dos.vue';
app.component('dos', dos);


app.mount('#app');
