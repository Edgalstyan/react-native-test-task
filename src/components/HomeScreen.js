import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Dropdown} from "react-native-material-dropdown";
import Colors from "../Colors";
import { observer, inject } from "mobx-react";
import Icon from 'react-native-vector-icons/FontAwesome';
import rootStore from '../stores/RootStore';
import style from './style';

@inject('rootStore')
@observer
class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { countryStore, currencyStore } = this.props.rootStore;
    countryStore.fetchAllCountries();
    currencyStore.fetchAllCurrencies();
  }

  changeCountry(value, index, data) {
    const { countryStore, currencyStore } = this.props.rootStore;
    countryStore.setSelectedCountry(data[index]);

    if (!currencyStore.getIsSelectedCurrency) {
      currencyStore.setSelectedCurrency(data[index].preferredCurrency);
    }
  }

  changeCurrency(value, index, data) {
    const { currencyStore } = this.props.rootStore;
    currencyStore.setSelectedCurrency(data[index]);
    currencyStore.makeCurrencySelected();
  }

  render() {
    const { countryStore, currencyStore } = this.props.rootStore;

    return <View style={style.mainContainer}>
      <View style={style.closeSection}>
        <View style={style.closeSelectPanel}>
          <TouchableOpacity>
            <Icon name="times-circle-o" size={40} color={Colors.dark} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.selectPanel}>
        <View style={style.selectPanelItem}>
          <Dropdown
            label='Country'
            data={countryStore.getCountries}
            onChangeText={(value, index, data) => this.changeCountry(value, index, data)}
            value={countryStore.getSelectedCountry.value}
          />
        </View>
        <View style={style.selectPanelItem}>
          <Dropdown
            label='Currency'
            data={currencyStore.getCurrencies}
            onChangeText={(value, index, data) => this.changeCurrency(value, index, data)}
            value={currencyStore.getSelectedCurrency.value}
          />
        </View>
      </View>

      <View style={style.sendPanel}>
          <View style={style.actionSection}>
            <TouchableOpacity style={[style.actionItem, {backgroundColor: Colors.success}]}>
              <Icon name="plus" size={18} color={Colors.darkSuccess} />
            </TouchableOpacity>
            <TouchableOpacity style={[style.actionItem, {marginLeft: 15, backgroundColor: Colors.success}]}>
              <Icon name="user-o" size={18} color={Colors.darkSuccess} />
            </TouchableOpacity>
            <TouchableOpacity style={[style.actionItem, {marginLeft: 15, backgroundColor: Colors.success}]}>
              <Icon name="paperclip" size={18} color={Colors.darkSuccess} />
            </TouchableOpacity>
            <TouchableOpacity style={[style.actionItem, {marginLeft: 15, backgroundColor: Colors.success}]}>
              <Icon name="clock-o" size={18} color={Colors.darkSuccess} />
            </TouchableOpacity>
            <TouchableOpacity style={[style.actionItem, {marginLeft: 15, backgroundColor: Colors.success}]}>
              <Icon name="microphone" size={18} color={Colors.darkSuccess} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[style.actionItem, {backgroundColor: Colors.danger}]}>
            <Icon name="paper-plane" size={18} color={Colors.darkDanger} />
          </TouchableOpacity>
      </View>
    </View>
  }
}

export default HomeScreen
