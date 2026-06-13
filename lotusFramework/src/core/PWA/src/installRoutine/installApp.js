let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installApp();
});

export default async function installApp() {

    if (!deferredPrompt) {
        return;
    }

    await deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    console.log(outcome);

    deferredPrompt = null;
}