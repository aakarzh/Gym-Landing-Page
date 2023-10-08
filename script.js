document.addEventListener("DOMContentLoaded", function () {
    const muscleGroupSelect = document.getElementById("muscle-group");
    const exerciseSelect = document.getElementById("exercise");
    const addButton = document.getElementById("add-exercise");
    const workoutPlanList = document.getElementById("workout-plan");

    addButton.addEventListener("click", function () {
        const muscleGroup = muscleGroupSelect.value;
        const exercise = exerciseSelect.value;

        const listItem = document.createElement("li");

        // Create a cross symbol (X) for deleting the exercise
        const crossSymbol = document.createElement("span");
        crossSymbol.textContent = "❌";
        crossSymbol.classList.add("delete-cross");
        crossSymbol.addEventListener("click", function () {
            workoutPlanList.removeChild(listItem);
        });

        listItem.textContent = `${muscleGroup}: ${exercise}`;
        listItem.appendChild(crossSymbol);
        
        workoutPlanList.appendChild(listItem);
    });
});
