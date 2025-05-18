import axios from 'axios';
import { create } from 'zustand';
import { CryptoCurrenciesResponseArraySchema } from './schema/crypto-schema';
import type { Cryptocurrency } from './types';

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCriptos: () => Promise<void>
}

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = CryptoCurrenciesResponseArraySchema.safeParse(Data)
    if (result.success) {
        return result.data
    }
}

export const useCryptoStore = create<CryptoStore>((set) => ({
    cryptocurrencies: [],
    fetchCriptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    }
}))