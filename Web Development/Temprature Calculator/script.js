const tempForm = document.getElementById("tempForm");
        tempForm.addEventListener("submit", convert);

        function convert(event) {
            event.preventDefault(); // Prevent default form submission behavior

            const tempInput = document.getElementById("tempInput").value;
            const tempType = document.getElementById("tempType").value;
            let result;

            if (tempType === "celsius") {
                result = (tempInput * 9 / 5) + 32;
                result = result.toFixed(2) + " °F / " + (parseFloat(tempInput) + 273.15).toFixed(2) + " K";
            } else if (tempType === "fahrenheit") {
                result = (tempInput - 32) * 5 / 9;
                result = result.toFixed(2) + " °C / " + ((parseFloat(tempInput) + 459.67) * 5 / 9).toFixed(2) + " K";
            } else if (tempType === "kelvin") {
                result = (parseFloat(tempInput) - 273.15) + " °C / " + ((parseFloat(tempInput) * 9 / 5) - 459.67).toFixed(2) + " °F";
            }

            const resultDiv = document.getElementById("result");
            resultDiv.textContent = result;
        }