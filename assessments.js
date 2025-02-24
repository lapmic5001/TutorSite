document.getElementById("submitTestCodeBtn").addEventListener("click", function () {
    const testCode = document.getElementById("testCodeInput").value;
    // Example: hardcoded valid code for demonstration purposes
    const validCode = "MATH123";

    if (testCode === validCode) {
        document.getElementById("assessmentContent").style.display = "block";
    } else {
        alert("Invalid test code. Please try again.");
    }
});
