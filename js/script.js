
function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("confirm-popup").style.display = "flex";
}

function confirmSubmission() {
    document.getElementById("real-estate-form").submit();
}

function closePopup() {
    document.getElementById("confirm-popup").style.display = "none";
}

document.querySelector("button[type='reset']").addEventListener("click", function() {
    const form = document.getElementById("real-estate-form");
    form.reset();
});
