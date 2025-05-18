import { create } from 'zustand'
import type { Cryptocurrency } from './types'
import { devtools } from 'zustand/middleware'
import { getCryptos } from './services/CryptoService'

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCriptos: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    fetchCriptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    }
})))