import {create} from 'zustand';

export const useCryptoStore = create(() => ({
    fetchCriptos: () => {
        console.log('From FetchCryptos');
    }
}))