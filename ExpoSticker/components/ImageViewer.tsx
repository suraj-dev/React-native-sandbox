import { StyleSheet } from "react-native";
import { Image, ImageSource } from "expo-image";

type Props = {
   imageSource: ImageSource;
   selectedImage?: string;
}

export default function ImageViewer({ imageSource, selectedImage }: Props) {
    const imageSrc = selectedImage ?? imageSource;
  return (
    <Image
      source={imageSrc}
      style={styles.image}
    />
  );
}
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 16,
  },
});
