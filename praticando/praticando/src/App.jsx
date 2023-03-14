import "./App.css";
import { HookReduce } from "./components/HookReduce";
import { HookReducerHuriel } from "./components/HookReducerHuriel";
import { HookUseContext } from "./components/HookUseContext";
import { UseRef } from "./components/UseRef";


function App() {
  return (
    // <HookUseContext>
    //   <div className="App">
    //     <HookReduce />
    //     <HookReducerHuriel />
    //   </div>
    // </HookUseContext>
    <div>
      <UseRef/>
    </div>
  );
}

export default App;
