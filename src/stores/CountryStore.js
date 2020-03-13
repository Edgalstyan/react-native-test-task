import { action, observable, computed } from 'mobx';
import { getCountries } from '../services/fetchList';
import { persist } from "mobx-persist";

class CountryStore {
  @persist('list') @observable countries = [];
  @persist('object') @observable selectedCountry = {};

  @action fetchAllCountries() {
    getCountries().then((data) => {
      this.countries = data.items;
    })
  }

  @action setSelectedCountry(country) {
    this.selectedCountry = country;
  }

  @computed get getCountries() {
    const countries = [];

    this.countries.map(country => {
      countries.push({
        id: country._id,
        value: country.translations.en,
        preferredCurrency: {
          id: country.preferredCurrency.id,
          value: country.preferredCurrency.name,
        },
      });
    });

    return countries;
  }

  @computed get getSelectedCountry() {
    return this.selectedCountry;
  }
}

const countryStore = new CountryStore();
export default countryStore;