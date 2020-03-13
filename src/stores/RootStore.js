import {AsyncStorage} from 'react-native';
import { create } from 'mobx-persist';

import CountryStore from './CountryStore';
import CurrencyStore from './CurrencyStore';

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

class RootStore {
  countryStore = CountryStore;
  currencyStore = CurrencyStore;

  constructor() {
    Promise.all([
      hydrate('country', this.countryStore),
      hydrate('currency', this.currencyStore),
    ]);
  }
}

export default new RootStore();