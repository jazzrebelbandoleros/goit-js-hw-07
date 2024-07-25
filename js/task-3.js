const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onFieldInput = () => {
  const withoutSpaceInputEl = inputEl.value.trim();
  if (withoutSpaceInputEl) {
    spanEl.textContent = withoutSpaceInputEl;
  } else {
    spanEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", onFieldInput);
