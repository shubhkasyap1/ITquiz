export const cheatingPrevention = () => {
    // 🔹 Detect Tab Switching or Minimizing
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            alert("❌ Tab switch detected! Submitting quiz...");
            submitQuiz();
        }
    });

    // 🔹 Detect Losing Window Focus
    window.addEventListener("blur", function () {
        alert("❌ Focus lost! Quiz will be submitted.");
        submitQuiz();
    });

    // 🔹 Prevent Leaving the Quiz
    window.addEventListener("beforeunload", function (event) {
        event.preventDefault();
        event.returnValue = "Are you sure you want to leave? Your quiz will be submitted!";
    });

    // 🔹 Force Fullscreen Mode
    document.documentElement.requestFullscreen?.();

    document.addEventListener("fullscreenchange", function () {
        if (!document.fullscreenElement) {
            alert("❌ Full-screen mode exited! Submitting quiz...");
            submitQuiz();
        }
    });

    // 🔹 Prevent Keyboard Shortcuts (F12, Alt+Tab, Inspect Element)
    document.addEventListener("keydown", function (event) {
        if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
            event.preventDefault();
            alert("❌ Inspect Element is disabled!");
        }
        if (event.altKey && event.key === "Tab") {
            alert("❌ Alt+Tab detected! Quiz will be submitted.");
            submitQuiz();
        }
    });

    // 🔹 Detect External Monitors
    navigator.mediaDevices.enumerateDevices().then((devices) => {
        const videoInputs = devices.filter((device) => device.kind === "videoinput");
        if (videoInputs.length > 1) {
            alert("❌ Multiple monitors detected! Submitting quiz...");
            submitQuiz();
        }
    });

    function submitQuiz() {
        console.log("Submitting quiz...");
        // Example: axios.post("/api/submit-quiz", { studentId, quizId });
    }
};


