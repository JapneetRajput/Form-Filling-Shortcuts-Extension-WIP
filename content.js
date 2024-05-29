document.addEventListener("DOMContentLoaded", function () {
  const textInputs = document.querySelectorAll('input[type="text"]');

  textInputs.forEach((input) => {
    input.addEventListener("input", function () {
      const key = this.value;

      const value = localStorage.getItem(key);
      if (value) {
        input.value = value;
      }
    });
  });
});
