function showSection(sectionId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(sectionId);

    if (selectedPage) {
        selectedPage.classList.add("active");
        window.scrollTo(0, 0);
    }
}


function showMessage(message) {
    alert(message);
}


function askAI() {

    const question = document.getElementById("aiQuestion").value.trim();

    const answer = document.getElementById("aiAnswer");

    if (question === "") {
        answer.innerHTML = "Please type a question first.";
        return;
    }

    answer.innerHTML =
        "Your AI learning assistant will answer this question when the AI system is connected.";
}
