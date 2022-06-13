import "./App.css"
import Exercicio01 from "./components/Exercicio01";

const App = () => {
 
  let num1 = 3;
  let num2 = 3;
  return (
      <div className="App">
        <Exercicio01 num1={num1} num2={num2}/>
      
      </div>
    );
}
export default App