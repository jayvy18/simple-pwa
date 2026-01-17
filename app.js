document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("output").textContent = "button clicked";
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("service-worker.js")
            .then(() => console.log("Service Worker registered"))
            .catch(err => console.log("Service Worker failed", err));
    });
}
