document.getElementById("generateQuestionBtn").addEventListener("click", function () {
    const topic = document.getElementById("topicSelect").value;
    const questionContainer = document.getElementById("questionContainer");
    let questionHTML = "";

    // Randomly choose one of the question types
    const questionTypes = ["multipleChoice", "matching", "writtenResponse"];
    const selectedType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

    if (topic === "algebra") {
        if (selectedType === "multipleChoice") {
            questionHTML = `
        <p>Solve for x: 2x + 3 = 7</p>
        <ul>
          <li><input type="radio" name="q1" value="1"> x = 1</li>
          <li><input type="radio" name="q1" value="2"> x = 2</li>
          <li><input type="radio" name="q1" value="3"> x = 3</li>
        </ul>`;
        } else if (selectedType === "matching") {
            questionHTML = `
        <p>Match the equations with their solutions:</p>
        <ul>
          <li>2x + 3 = 7 → x = ?</li>
          <li>3x - 2 = 7 → x = ?</li>
        </ul>
        <p>Answers: [2, 3, 4]</p>`;
        } else if (selectedType === "writtenResponse") {
            questionHTML = `
        <p>Solve for x: 5x - 10 = 0</p>
        <input type="text" id="writtenAnswer" placeholder="Your answer here">`;
        }
    }
    // Additional topics (geometry, calculus, etc.) can be added similarly

    questionContainer.innerHTML = questionHTML;
});
