import {StyleSheet} from "react-native";
import Colors from "../Colors";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 20,
  },
  closeSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeSelectPanel: {
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingTop: 15,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  selectPanel: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectPanelItem: {
    width: '45%',
  },
  sendPanel: {
    width: '100%',
    height: 80,
    backgroundColor: Colors.white,
    borderRadius: 50,
    marginTop: 20,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  actionSection: {
    flex: 1,
    flexDirection: 'row',
  },
  actionItem: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;