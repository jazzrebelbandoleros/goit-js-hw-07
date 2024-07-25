const formEl = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const formData = {};
  for (const element of formEl.elements) {
    if (element.type != "submit") {
      formData[element.name] = element.value.trim();
    }
  }

  if (!formData.email || !formData.password) {
    alert("All form fields must be filled in");
    return;
  }

  formEl.reset();
};

formEl.addEventListener("submit", onFormSubmit);
