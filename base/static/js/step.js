let currentStep = 1;

// Mostrar solo el primer paso al inicio
document.addEventListener('DOMContentLoaded', () => {
  showStep(currentStep);
  updateProgressBar();
});

function showStep(stepNumber) {
  const allSteps = document.querySelectorAll('.signup form > div');
  for (const step of allSteps) {
    step.style.display = 'none';
  }
  document.querySelector(`.step${stepNumber}`).style.display = 'block';
}

function updateProgressBar() {
    const stepNumbers = document.querySelectorAll('.step-number');
  
    // Actualizar número de paso
    stepNumbers.forEach((step, index) => {
      if (index + 1 === currentStep) {
        step.classList.add('active'); // Añadir clase 'active' al número de paso actual
      } else {
        step.classList.remove('active'); // Quitar clase 'active' de los números de paso inactivos
      }
    });
  }

function nextStep() {
  if (validateCurrentStep()) {
    currentStep++;
    showStep(currentStep);
    updateProgressBar();
  } else {
    alert('Completa todos los campos antes de pasar al siguiente paso.');
  }
}

function prevStep() {
  currentStep--;
  showStep(currentStep);
  updateProgressBar();
}

function validateCurrentStep() {
  const currentStepInputs = document.querySelectorAll(`.step${currentStep} input, .step${currentStep} textarea`);
  for (const input of currentStepInputs) {
    if (input.type === 'date') {
      const dateValue = new Date(input.value);
      if (isNaN(dateValue.getTime())) {
        return false; // La fecha no es válida
      }
    } else {
      if (input.value.trim() === '') {
        return false;
      }
    }
  }
  return true;
}
