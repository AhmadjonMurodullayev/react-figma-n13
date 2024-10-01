import Header from './components/header/header'
import data from './data'
import Card from './pages/card/card'
import './index.css'

function App() {
  
  return (
    <div className='conatiner'>
    <Header/>
    <Card data={data.products} />
    </div>
  )
}

export default App
