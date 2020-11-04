import {Button} from './components/atm.button/button'

export function App() {
  return (
    <div className="App">
      <Button text='Continuar' kind='primary' disabled={false} expanded={true} outline={false} loading={false}></Button>
    </div>
  );
}
  