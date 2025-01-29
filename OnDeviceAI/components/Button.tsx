import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function IconButton({ icon, label, onPress, style }: Props) {
  return (
    <Pressable style={[styles.iconButton, style]} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    width: '100%',
    maxHeight: 200,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#008080',
    borderRadius: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
    fontSize: 16,
    paddingLeft: 8,
    paddingBottom: 8
  },
});
