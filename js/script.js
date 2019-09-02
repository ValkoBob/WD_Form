const houses = ["Arryn", "Baratheon", "Bolton", "Frey", "Greyjoy", "Lannister", "Martell", "Stark", "Targaryen",
  "Tarly", "Tully", "Tyrell"];

$(document).ready(function () {
  const slider = $('.slider');
  houses.map((image) => {
    const div = '<div></div>';
    slider.append($(div).addClass('slide').html(
        `<div class="slides--card"><img src="./images/${image}.jpg" alt="${image}"></div>`));
  });
  slider.slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false
  });
  const select = $('#house');
  let counter = 1;
  select.select2({});
  houses.map((house) => {
    const option = new Option(house, counter++ + "", false, false);
    select.append(option);
  });
  select.select2({closeOnSelect: true});
  select.change(function () {
    slider.slick('slickGoTo', +this.value);
  });

  const regExps =
      [
        {name: "email", regExp: /.+@.+\..+/},
        {name: "password", regExp: /^[\w]{8,16}$/},
        {name: "name", regExp: /^[A-Za-z]+$/}
      ];

  const validateInputs = document.getElementsByClassName("field");

  Array.from(validateInputs).forEach((input) => {
    input.addEventListener("focusout", function () {
      const inputID = this.id;
      let obj = regExps.find(item => {
        return item.name === inputID
      });

      if (!isValid(this, obj.regExp)) {
        this.classList.add("input--error");
        this.removeEventListener("focusout", () => {
        });
      }
      this.addEventListener("keyup", () => {
        if (!isValid(this, obj.regExp)) {
          this.classList.add("input--error");
        } else {
          this.classList.remove("input--error");
        }
      });
    });
  });

  function isValid(input, regExp) {
    return regExp.test(input.value);
  }
});
