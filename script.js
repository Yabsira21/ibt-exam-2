const url = "https://jsonplaceholder.typicode.com/posts";
const date = new Date();
const dateContent = date.toString().split(" ")[3];
// const isLoading = false;

document.querySelector("#year").textContent = dateContent;
// const fetchposts = () => {
//   const re;
// };

async function fetchposts() {
  try {
    // isLoading = true;

    document.querySelector(".projects").textContent = "loading....";

    const response = await fetch(url);
    const data = await response.json();
    document.querySelector(".projects").innerHTML = "";
    console.log(data);
    for (d of data) {
      document.querySelector(".projects").innerHTML += `
  <div class="project-card">
                <img src="assets/git.png" alt="">
                <p class="title">${d.title}</p>
                <p class="desc">${d.body}p>
                <button class="open-btn" id="openModal">View Details</button>


            </div>
  `;
    }
  } catch (e) {
    document.querySelector(".projects").textContent =
      "There was something wrong";
  }
}

fetchposts();

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // document.querySelector("#nameError").textContent = "";
  // document.querySelector("#emailError").textContent = "";
  console.log(document.querySelector("#name"));
  // console.log();
  if (document.querySelector("#name").value == "") {
    document.querySelector("#nameError").textContent = "Name is Empty";
  }
  // console.log();
  if (document.querySelector("#email").value == "") {
    document.querySelector("#emailError").textContent = "Email is Empty";
  }
});

const overlay = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelModal");
// function openModal() {
//   overlay.classList.add("active");
//   document.body.style.overflow = "hidden";
// }
// function closeModal() {
//   overlay.classList.remove("active");
//   document.body.style.overflow = "";
// }

// openBtn.addEventListener("click", openModal);
// closeBtn.addEventListener("click", closeModal);
// cancelBtn.addEventListener("click", closeModal); // Close when clicking the overlay itself overlay.addEventListener("click", (event) => { if (event.target === overlay) { closeModal(); } }); // Close with Escape document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeModal(); } });

document.querySelector("body").addEventListener("click", (e) => {
  console.log(e.target);
  // console.log(;
  if (e.target.classList.contains("close-btn")) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

document.querySelector(".projects").addEventListener("click", (e) => {
  // if (e.target)
  console.log(e.target);
  if (e.target.className === "open-btn") {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
});
