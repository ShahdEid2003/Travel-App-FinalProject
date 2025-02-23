export const handleSubmit = async (event) => {
    event.preventDefault();
    const location = document.getElementById("location").value;
    const response = await fetch("http://localhost:8081/trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location })
    });
    const data = await response.json();
    document.getElementById("results").innerHTML = data.message;
};

