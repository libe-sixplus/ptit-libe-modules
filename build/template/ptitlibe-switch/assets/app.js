'use strict';

function init() {

  var app = new Vue({
    el: '#app',
    data: {
      switchs: [],
      index: 0,
      current: 0
    },
    created () {
      this.$http.get('assets/switch.json').then(function(res) {
        this.switchs = res.body
      }, function() {
        console.log('error');
      });
    },
    methods: {
      goTo (index) {
        this.index = index
      },
      visible (i) {
        return i === this.index
      },
      width () {
        return {width: 100 / this.switchs.length + '%'}
      }
    }
  });

}
init()
