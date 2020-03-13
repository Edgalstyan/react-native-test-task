import { action, observable, computed } from 'mobx';
import { getCurrencies } from '../services/fetchList';
import { persist } from "mobx-persist";

class CurrencyStore {
  @persist('list') @observable currencies = [];
  @persist('object') @observable selectedCurrency = {};
  @persist @observable isSelectedCurrency = false;

  @action fetchAllCurrencies() {
    getCurrencies().then((data) => {
      this.currencies = data.items;
    })
  }

  @action setSelectedCurrency(currency) {
    this.selectedCurrency = currency;
  }

  @action makeCurrencySelected() {
    this.isSelectedCurrency = true;
  }

  @computed get getCurrencies() {
    const currencies = [];

    this.currencies.map(currency => {
      currencies.push({
        id: currency._id,
        value: currency.translations.en,
      });
    });

    return currencies;
  }

  @computed get getSelectedCurrency() {
    return this.selectedCurrency;
  }

  @computed get getIsSelectedCurrency() {
    return this.isSelectedCurrency;
  }
}

const currencyStore = new CurrencyStore();
export default currencyStore;