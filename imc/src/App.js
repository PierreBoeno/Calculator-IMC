import { useState } from "react";
import "./app.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.5) {
      setMensagem("Abaixo do Peso. Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 18.5 && imc <= 24.9) {
      setMensagem("Peso Normal. Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 25 && imc <= 29.9) {
      setMensagem("Sobrepeso. Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 30 && imc <= 34.9) {
      setMensagem("Obesidade Grau I. Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 35 && imc <= 39.9) {
      setMensagem("Obesidade Grau II. Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 40) {
      setMensagem("Obesidade Grau III ou Mórbida. Seu IMC: " + imc.toFixed(2));
    }
  }

  function teste() {
    alert("Resetar");
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <h3>Vamos calcular seu IMC</h3>

      <div className="area-input">
        <label for="altura"> Altura</label>
        <input
          type="number"
          min="0"
          max="300"
          id="altura"
          name="altura"
          placeholder="Altura em (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <label for="peso"> Peso</label>
        <input
          type="number"
          min="0"
          max="200"
          id="peso"
          name="peso"
          placeholder="Peso em (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <div className="buttons">
          <button className="btn-grad" onClick={calcularIMC}>
            Calcular
          </button>
          <button className="btn-grad" onclick={teste}>
            Resetar
          </button>
        </div>
      </div>

      <h3>{mensagem}</h3>
    </div>
  );
}
