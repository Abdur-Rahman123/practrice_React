
import './App.css';
import Welcome from './Welcome';
import Class from './Class'
import Myfunction from './Function';
import State from './State';
import ConditionReturn from './ConditonReturn'
import NewDemo from './NewDemo'
import Form from './Form'

function App() {
  return (
    <div>
    <Welcome name="Rahman" age="20"></Welcome>
    <Class name="Karim"></Class>
    <Myfunction></Myfunction>
    <State name="value"></State>
    <ConditionReturn></ConditionReturn>
    <Form></Form>

    </div>

  );
}

export default App;
