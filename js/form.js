const formEl = document.querySelector(".fb-form");
let objFormData = {};

const submitFormData = async (formData) => {
  console.log(formData);
  try {
    const res = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    if (data.status === "ok") {
      console.log(data);
    } else {
      console.log("Something went wrong");
    }
  } catch (err) {
    console.log(err.message);
  }
};

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);

  formData.forEach((value, key) => {
    objFormData[key] = value;
  });

  submitFormData(objFormData);
});
