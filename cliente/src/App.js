import React,{lazy , Suspense} from 'react'
import './App.css';

const Header = lazy(()=> import('./components/Header'))
const Footer = lazy(()=> import('./components/Footer'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Carregando...</p>}>
      <Header />
      </Suspense>
      
      <Suspense fallback={<p>Carregando...</p>} >
      <Footer />
      </Suspense>
    </div>
  );
}

export default App;
