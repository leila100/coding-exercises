new Vue({
  el: "#exercise",
  data: {
    toggle: false,
    effect: {},
    color: "",
    userClass: "",
    isVisible: true,
    width: 20
  },
  methods: {
    startEffect: function() {
      const vm = this;
      setInterval(function() {
        vm.toggle = !vm.toggle;
        vm.effect = {
          highlight: vm.toggle,
          shrink: !vm.toggle
        };
      }, 1000);
    },
    startProgress: function() {
      const vm = this;
      setInterval(function() {
        vm.width += 10;
      }, 1000);
    }
  },
  computed: {
    styleObj: function() {
      return {
        backgroundColor: this.color,
        width: "100px",
        height: "100px"
      };
    },
    setWidth: function() {
      return {
        width: this.width + "px",
        height: "100px",
        backgroundColor: "pink"
      };
    }
  }
});
