import axios from "axios";

export const sendMessageToRick = async (message: string) => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  try {
    const response = await axios.post("https://ai.stec.cx/single", {
      prompt: message,
      service: "saturn-v1",
      clientid: clientId,
      projectid: "1a9z7ximm076ibr0hisgyk",
      habits: ["sarcastic", "rude"],
    });
    return response.data.text || "algo de errado";
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao enviar a mensagem para o bot");
  }
};
