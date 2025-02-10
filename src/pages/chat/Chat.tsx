import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { sendMessageToRick } from "../../service/api";

export default function Chat() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    const userMessage = { sender: "Você", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    const botResponse = await sendMessageToRick(input);
    const botMessage = { sender: "RickBot", text: botResponse };

    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        bgcolor: "#b1b1b1",
        color: "#FFF",
        borderRadius: 2,
        p: 3,
      }}
    >

    </Container>
  );
}
