document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('grid-container');
  const passwordInput = document.getElementById('passwordInput');

  let password = '';

  // Generar números aleatorios
  const numbers = Array.from({ length: 10 }, (_, i) => i);
  numbers.sort(() => Math.random() - 0.5);

  // Crear elementos de la cuadrícula
  for (let i = 0; i < numbers.length; i++) {
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      gridItem.textContent = numbers[i];

      // Eventos de mouse para cada elemento
      gridItem.addEventListener('mouseover', () => {
          // Cambiar el contenido del todos los elementos a asteriscos
          gridContainer.querySelectorAll('.grid-item').forEach(item => {
              item.textContent = '*';
          });
      });

      gridItem.addEventListener('mouseout', () => {
          // Restaurar el contenido original de todos los elementos
          gridContainer.querySelectorAll('.grid-item').forEach((item, i) => {
              item.textContent = numbers[i];
          });
      });

      // Evento de clic para cada elemento del teclado numérico
      gridItem.addEventListener('click', () => {
          appendNumber(numbers[i]);
      });

      gridContainer.appendChild(gridItem);
  }

  function appendNumber(num) {
      if (password.length < 6) {
          password += num;
          updatePasswordInput();
      }
  }

  function updatePasswordInput() {
      passwordInput.value = password.replace(/./g, '*');
  }
});
