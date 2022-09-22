import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Label from './components/Label';

function App() {
  // You have show the the value of the input in the label whe you push the button
  return (
    <div>
     <Input/>
     <Button/>
     <Label
        text="hola"
        isLabel={false}
     />
    </div>
  );
}

export default App;
