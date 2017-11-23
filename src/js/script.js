import Vue from 'vue';

import store from './store';
import Root from './components/root.vue';
const isSP = /android|iphone|ipod|ipad/i.test(navigator.userAgent);

if (isSP) {
  new Vue({
    el: document.getElementById('root'),
    store,
    render: (h) => h(Root)
  });
}
