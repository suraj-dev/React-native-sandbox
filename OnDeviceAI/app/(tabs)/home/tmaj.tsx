import IconButton from "@/components/Button";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { useLLM } from "react-native-executorch";
import { Model } from "react-native-executorch/lib/typescript/types/common";

export default function TellMeAJokeScreen() {
  const [loading, setLoading] = useState(true);

  const prompt =
    "Be a comedian. Tell me a dad joke. Do not repeat a joke. Keep it fresh!";
  let llama: Model = useLLM({
    modelSource:
      "https://huggingface.co/software-mansion/react-native-executorch-llama-3.2/resolve/main/llama-3.2-3B/QLoRA/llama3_2-3B_qat_lora.pte",
    tokenizerSource:
      "https://huggingface.co/software-mansion/react-native-executorch-llama-3.2/resolve/main/llama-3.2-3B/QLoRA/tokenizer.bin",
    contextWindowLength: 10,
  });
  const generateJoke = async () => {
    await llama.generate(prompt);
  };

  useEffect(() => {
    if (llama.isReady) {
      setLoading(false);
      generateJoke();
    }
  }, [llama.isReady]);

  useEffect(() => {
    if (llama.isGenerating) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [llama.isGenerating]);

  return (
    <ThemedView style={[styles.container, loading ? { justifyContent: 'center' } : {}]}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.container}>
          <Text style={styles.jokeText}>{llama.response}</Text>
          <IconButton
            icon="mood"
            label="Tell me another one!"
            onPress={generateJoke}
          />
        </View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    margin: 16,
  },
  jokeText: {
    fontSize: 18,
  },
});
