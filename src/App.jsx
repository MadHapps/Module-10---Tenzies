import './App.css'
import Game from './components/Game'

function App() {

  return (
    <main>
      <section className='title'>
        <h1>Tenzies</h1>
        <h2>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
      </section>
      <Game />
    </main>
  )
}

export default App
