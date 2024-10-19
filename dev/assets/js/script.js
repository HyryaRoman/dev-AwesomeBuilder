{
  function setInfo(source, target) {
    // Get all info slots
    const slots = target.querySelectorAll('[data-info-slot]');

    // For each info slot
    slots.forEach((slot) => {
      // Get attribute it displays
      const dataSource = 'data-' + slot.getAttribute('data-info-slot');

      // Get attributes value
      const data = source.getAttribute(dataSource);

      // Set inner html to retrieved value
      slot.innerHTML = data;

      // Add 'data-value' attribute for styling
      slot.setAttribute('data-value', data);
    })
  }

  function clearInfo(target) {
    // Get all info slots
    const slots = target.querySelectorAll('[data-info-slot]');

    // Get clear text
    const emptyText = target.getAttribute('data-info-empty') || '-';

    // For each info slot
    slots.forEach((slot) => {

      // Set inner html to clear text
      slot.innerHTML = emptyText;

      // Clear 'data-value' attribute for styling
      slot.removeAttribute('data-value');
    })
  }

  function setupInfoMap(map) {
    // Find info panel by given target attribute
    const display = document.querySelector(map.getAttribute('data-target'));

    // Get all options
    const options = map.children;

    // For each option
    for (let i = 0; i < options.length; i++) {
      const option = options[i];

      // Set info when mouse enters
      option.addEventListener("mouseover", (e) => setInfo(option, display));

      // And clear it when it leaves
      option.addEventListener("mouseout", (e) => clearInfo(display));
    }

    clearInfo(display);
  }

  document.querySelectorAll('.info-map').forEach(setupInfoMap);
}
