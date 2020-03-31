new Vue({
  el: "#exercise",
  data: {
    name: "Leila",
    age: 46,
    inputVal: "",
    imageUrl:
      "https://www.verywellmind.com/thmb/8quBdAdGoHUYoLON4FDQwPnlZl0=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/iStock-619961796-edit-59cabaf6845b3400111119b7.jpg"
  },
  methods: {
    between0and1: function() {
      return Math.random().toFixed(2);
    },
    showAlert: function() {
      alert("Button has been clicked");
      this.name = "Kenza";
      return;
    },
    saveValue: function(event) {
      this.inputVal = event.target.value;
    }
  }
});
