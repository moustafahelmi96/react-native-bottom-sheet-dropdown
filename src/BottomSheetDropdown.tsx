import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { DropdownProps } from "./types";
import { hp, wp } from "./utils/index";
import DownIcon from "./icons/DownIcon";
import DropdownModal from "./DropdownModal";

const BottomSheetDropdown: React.FC<DropdownProps> = ({
  data,
  onSelect,
  rtl,
  title = "",
  placeholder = "Select an option",
  selectedValue,
  selectedValueStyle,
  placeholderStyle,
  mainDropdownInput,
  titleStyle,
  dropdownModalProps,
  selectedOption,
  iconColor,
  titleTextSize,
}) => {
  const [showModal, setShowModal] = React.useState(false);

  const toggleDropdownModal = React.useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const styles = StyleSheet.create({
    mainContainer: {},
    dropdownContainer: {
      width: "100%",
      height: hp(5.5),
      backgroundColor: "#ffffff",
      borderRadius: wp(2),
      marginTop: title ? hp(1) : 0,
      borderWidth: 1,
      borderColor: "#CFCFCF",
      flexDirection: rtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: wp(4),
      paddingVertical: hp(1),
      ...mainDropdownInput,
    },
    title: {
      fontSize: titleTextSize || 16,
      color: "#0D0D0D",
      textAlign: rtl ? "right" : "left",
      ...titleStyle,
    },
    selectedValue: {
      fontSize: 16,
      color: "#0D0D0D",
      textAlign: rtl ? "right" : "left",
      ...selectedValueStyle,
    },
    placeholderValue: {
      fontSize: 16,
      color: "#A0A0A0",
      textAlign: rtl ? "right" : "left",
      ...placeholderStyle,
    },
  });

  return (
    <>
      <DropdownModal 
        visible={showModal} 
        onClose={toggleDropdownModal} 
        data={data} 
        onSelect={onSelect} 
        selectedOption={selectedOption} 
        rtl={rtl}
        dropdownModalProps={{
          ...dropdownModalProps
        }} 
      />
      <View style={styles.mainContainer}>
        {title ? <Text style={styles.title}>{title}</Text> : null}
        <Pressable
          style={styles.dropdownContainer}
          onPress={toggleDropdownModal}
        >
          {selectedOption ? (
            <Text style={styles.selectedValue}>{selectedOption?.label}</Text>
          ) : (
            <Text style={styles.placeholderValue}>{placeholder}</Text>
          )}
          <DownIcon color={iconColor} />
        </Pressable>
      </View>
    </>
  );
};

export default BottomSheetDropdown;
