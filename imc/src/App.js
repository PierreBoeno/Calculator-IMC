import "./app.css";

export default function App() {
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos Calcular seu imc</span>

      <div className="area-input">
        <input type="text" placeholder="Peso em (kg)" />
        <input type="text" placeholder="Altura em (cm)" />

        <button>Calcular</button>
      </div>

      <h2>Seu imc ...</h2>
    </div>
  );
}
