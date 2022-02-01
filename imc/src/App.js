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

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>Calcular</button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  );
}
