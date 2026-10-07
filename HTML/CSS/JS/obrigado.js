document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                window.location.href = "obrigado.html";
            } else {
                alert("Erro ao enviar o formulário.");
            }
        } catch (error) {
            alert("Erro ao enviar o formulário.");
        }
    });
});