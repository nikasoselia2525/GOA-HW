const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resizableDiv = document.getElementById("resizableDiv");

increaseBtn.addEventListener("click", () => {
    resizableDiv.classList.add("bigger");
    resizableDiv.classList.remove("smaller");
});

decreaseBtn.addEventListener("click", () => {
    resizableDiv.classList.add("smaller");
    resizableDiv.classList.remove("bigger");
});
