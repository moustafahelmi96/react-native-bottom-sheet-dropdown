import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { wp, hp } from "./utils";
import Modal from "react-native-modal";
import { DropdownModalProps } from "./types";
import TickIcon from "./icons/TickIcon";

const DropdownModal: React.FC<DropdownModalProps> = ({
  data,
  visible,
  onClose,
  onSelect,
  dropdownModalProps,
  selectedOption,
  rtl,
}) => {
  const styles = StyleSheet.create({
    modalContainer: {
      justifyContent: "flex-start",
      alignItems: "center",
      height: hp(40),
      width: "100%",
      borderTopLeftRadius: wp(2),
      borderTopRightRadius: wp(2),
      paddingHorizontal: wp(4),
      paddingVertical: hp(2),
      backgroundColor: dropdownModalProps?.dropdownStyles?.modalBackgroundColor || "#fff",
    },
    dash: {
      width: wp(10),
      height: hp(0.5),
      backgroundColor: "rgba(60, 60, 67, 0.3)",
      borderRadius: wp(2),
      alignSelf: "center",
      marginBottom: hp(2),
    },
    row: {
      width: "100%",
      flexDirection: rtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    dropdownTitle: {
      fontSize: 16,
      ...dropdownModalProps?.dropdownStyles?.dropdownTitleStyle,
    },
    close: {
      fontSize: 16,
      color: "blue",
      ...dropdownModalProps?.dropdownStyles?.closeTitleStyle,
    },
    leftSpacer: {
      width: wp(10),
    },
    optionContainer: {
      width: "100%",
      height: hp(6),
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: "rgba(60, 60, 67, 0.3)",
      flexDirection: rtl ? "row-reverse" : "row",
      alignItems: "center",
      ...dropdownModalProps?.dropdownStyles?.optionContainerStyle,
    },
    optionValueText: {
      fontSize: 14,
      textAlign: "left",
      ...dropdownModalProps?.dropdownStyles?.optionValueText,
    },
    scrollView: {
      width: "100%",
    },
    selectedValueText: {
      color: "#007AFF", // Default color for selected value
      ...dropdownModalProps?.dropdownStyles?.selectedOptionText,
    },
  });

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.dash} />
        <View style={styles.row}>
          <View style={styles.leftSpacer} />
          <Text style={styles.dropdownTitle}>
            {dropdownModalProps?.dropdownProps?.dropdownTitle}
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.close}>
              {dropdownModalProps?.dropdownProps?.closeTitle}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {data.map((item, index) => {
            const isSelected = selectedOption?.value === item.value;
            return (
              <Pressable
                key={item?.key || index}
                style={styles.optionContainer}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text
                  style={[
                    styles.optionValueText,
                    isSelected && styles.selectedValueText,
                  ]}
                >
                  {item.label}
                </Text>
                {isSelected && (
                  <TickIcon
                    color={
                      dropdownModalProps?.dropdownStyles?.selectedOptionText
                        ?.color || "#007AFF"
                    }
                  />
                )}
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default DropdownModal;
