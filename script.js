trackArea.addEventListener("mouseleave", () => {
    if (mouseData.length < 2) return;

    // Save as JSON string
    const dataStr = JSON.stringify(mouseData);
    console.log("Data JSON:", dataStr);

    // Optional: let user download the data
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mouse_data.json";
    a.click();
});