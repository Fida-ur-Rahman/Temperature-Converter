        // Get DOM elements
        const celsiusInput = document.getElementById('celsius');
        const fahrenheitInput = document.getElementById('fahrenheit');
        const swapBtn = document.getElementById('swapBtn');
        
        // Conversion direction flag (true = C to F, false = F to C)
        let conversionDirection = true;
        
        // Function to convert Celsius to Fahrenheit
        function celsiusToFahrenheit(celsius) {
            return (celsius * 9/5) + 32;
        }
        
        // Function to convert Fahrenheit to Celsius
        function fahrenheitToCelsius(fahrenheit) {
            return (fahrenheit - 32) * 5/9;
        }
        
        // Function to update Fahrenheit based on Celsius
        function updateFahrenheit() {
            const celsiusValue = parseFloat(celsiusInput.value);
            
            if (!isNaN(celsiusValue)) {
                const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
                fahrenheitInput.value = fahrenheitValue.toFixed(2);
            } else {
                fahrenheitInput.value = '';
            }
        }
        
        // Function to update Celsius based on Fahrenheit
        function updateCelsius() {
            const fahrenheitValue = parseFloat(fahrenheitInput.value);
            
            if (!isNaN(fahrenheitValue)) {
                const celsiusValue = fahrenheitToCelsius(fahrenheitValue);
                celsiusInput.value = celsiusValue.toFixed(2);
            } else {
                celsiusInput.value = '';
            }
        }
        
        // Function to swap conversion direction
        function swapConversion() {
            conversionDirection = !conversionDirection;
            
            if (conversionDirection) {
                // Change to C to F direction
                celsiusInput.placeholder = "Enter temperature";
                fahrenheitInput.placeholder = "Converted temperature";
                swapBtn.innerHTML = '<i class="fas fa-exchange-alt"></i>';
                swapBtn.title = "Swap conversion direction";
                
                // Clear inputs
                celsiusInput.value = '';
                fahrenheitInput.value = '';
                
                // Update event listeners
                celsiusInput.addEventListener('input', updateFahrenheit);
                fahrenheitInput.removeEventListener('input', updateCelsius);
                fahrenheitInput.addEventListener('input', function() {
                    if (this.value !== '') {
                        alert("Currently in Celsius to Fahrenheit mode. Clear this field and enter a value in Celsius instead, or click the swap button to change direction.");
                        this.value = '';
                    }
                });
            } else {
                // Change to F to C direction
                celsiusInput.placeholder = "Converted temperature";
                fahrenheitInput.placeholder = "Enter temperature";
                swapBtn.innerHTML = '<i class="fas fa-exchange-alt"></i>';
                swapBtn.title = "Swap conversion direction";
                
                // Clear inputs
                celsiusInput.value = '';
                fahrenheitInput.value = '';
                
                // Update event listeners
                celsiusInput.removeEventListener('input', updateFahrenheit);
                fahrenheitInput.addEventListener('input', updateCelsius);
                celsiusInput.addEventListener('input', function() {
                    if (this.value !== '') {
                        alert("Currently in Fahrenheit to Celsius mode. Clear this field and enter a value in Fahrenheit instead, or click the swap button to change direction.");
                        this.value = '';
                    }
                });
            }
        }
        
        // Initialize with C to F conversion
        celsiusInput.addEventListener('input', updateFahrenheit);
        
        // When user types in Fahrenheit field, show alert (since default is C to F)
        fahrenheitInput.addEventListener('input', function() {
            if (this.value !== '') {
                alert("Currently in Celsius to Fahrenheit mode. Clear this field and enter a value in Celsius instead, or click the swap button to change direction.");
                this.value = '';
            }
        });
        
        // Add click event to swap button
        swapBtn.addEventListener('click', swapConversion);
        
        // Add example values on page load for demo purposes
        window.addEventListener('DOMContentLoaded', function() {
            celsiusInput.value = "25";
            updateFahrenheit();
        });
