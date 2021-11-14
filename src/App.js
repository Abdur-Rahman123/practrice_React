
import './App.css';
import Welcome from './Welcome';
import Class from './Class'
import Myfunction from './Function';
import State from './State';
import ConditionReturn from './ConditonReturn'

function App() {
  return (
    <div>
    <Welcome name="Rahman" age="20"></Welcome>
    <Class name="Karim"></Class>
    <Myfunction></Myfunction>
    <State></State>
    <ConditionReturn></ConditionReturn>

    </div>

  );
}

export default App;
