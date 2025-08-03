import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostForm from './components/PostForm'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{marginBlockStart: '0'}}>Uso de useForm()</h1>
      <PostForm/>
    </>
  )
}

export default App
