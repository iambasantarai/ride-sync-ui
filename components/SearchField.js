import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

const SearchField = () => {
  return (
    <View style={styles.searchBar}>
      <Feather
        name="search"
        size={20}
        color={COLORS.lightGray}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        placeholderTextColor={COLORS.lightGray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    height: 45,
    width: "100%",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: COLORS.lightGray,
    backgroundColor: "#1D2328",
  },

  searchIcon: {
    marginLeft: 10,
  },

  searchInput: {
    color: COLORS.lightGray,
    marginLeft: 10,
    fontSize: 16,
  },
});

export default SearchField;
