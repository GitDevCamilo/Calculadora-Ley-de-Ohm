function mostrarResistencia() {
  ocultarSecciones();
  document.getElementById("seccion-resistencia").style.display = "block";
}

function mostrarCorriente() {
  ocultarSecciones();
  document.getElementById("seccion-corriente").style.display = "block";
}

function mostrarPotencia() {
  ocultarSecciones();
  document.getElementById("seccion-potencia").style.display = "block";
}

function mostrarVoltaje() {
  ocultarSecciones();
  document.getElementById("seccion-voltaje").style.display = "block";
}

function ocultarSecciones() {
  const secciones = document.querySelectorAll('[id^="seccion-"]');
  secciones.forEach((seccion) => (seccion.style.display = "none"));
}

function calcularResistencia() {
  const voltaje = parseFloat(
    document.getElementById("voltaje-resistencia").value
  );
  const corriente = parseFloat(
    document.getElementById("corriente-resistencia").value
  );

  if (!isNaN(voltaje) && !isNaN(corriente) && corriente !== 0) {
    const resistencia = voltaje / corriente;
    document.getElementById("resistencia").textContent =
      resistencia.toFixed(2) + " Ω";
  } else {
    alert(
      "Ingrese valores válidos para el voltaje y la corriente (la corriente no debe ser cero)."
    );
  }
}

function calcularCorriente() {
  const voltaje = parseFloat(
    document.getElementById("voltaje-corriente").value
  );
  const resistencia = parseFloat(
    document.getElementById("resistencia-corriente").value
  );

  if (!isNaN(voltaje) && !isNaN(resistencia) && resistencia !== 0) {
    const corriente = voltaje / resistencia;
    document.getElementById("corriente").textContent =
      corriente.toFixed(2) + " A";
  } else {
    alert(
      "Ingrese valores válidos para el voltaje y la resistencia (la resistencia no debe ser cero)."
    );
  }
}

function calcularPotencia() {
  const voltaje = parseFloat(document.getElementById("voltaje-potencia").value);
  const corriente = parseFloat(
    document.getElementById("corriente-potencia").value
  );

  if (!isNaN(voltaje) && !isNaN(corriente)) {
    const potencia = voltaje * corriente;
    document.getElementById("potencia").textContent =
      potencia.toFixed(2) + " W";
  } else {
    alert("Ingrese valores válidos para el voltaje y la corriente.");
  }
}

function calcularVoltaje() {
  const resistencia = parseFloat(
    document.getElementById("resistencia-voltaje").value
  );
  const corriente = parseFloat(
    document.getElementById("corriente-voltaje").value
  );

  if (!isNaN(resistencia) && !isNaN(corriente) && corriente !== 0) {
    const voltaje = resistencia * corriente;
    document.getElementById("voltaje").textContent = voltaje.toFixed(2) + " V";
  } else {
    alert(
      "Ingrese valores válidos para la resistencia y la corriente (la corriente no debe ser cero)."
    );
  }
}
