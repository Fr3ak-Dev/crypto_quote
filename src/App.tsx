import { useEffect } from "react"
import CriptoSearchFrom from "./components/CriptoSearchFrom"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCriptos)
  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchFrom />
          <CryptoPriceDisplay /> 
        </div>
      </div>
    </>
  )
}

export default App
