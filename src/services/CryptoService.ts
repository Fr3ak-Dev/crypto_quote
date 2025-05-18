import axios from 'axios'
import { CryptoCurrenciesResponseArraySchema } from '../schema/crypto-schema'
import type { Pair } from '../types'

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = CryptoCurrenciesResponseArraySchema.safeParse(Data)
    if (result.success) {
        return result.data
    }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
    console.log(pair)
}