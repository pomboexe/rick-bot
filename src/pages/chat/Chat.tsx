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

    const botResponse = await sendMessageToRick(input);
    const botMessage = { sender: "RickBot", text: botResponse };

    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        bgcolor: "#1c1c1c",
        color: "#FFF",
        borderRadius: 2,
        p: 3,
      }}
    >
      <Stack direction={"column"}>
        <Box>
          <Typography variant="h3" align="center" sx={{ color: "#0ff" }}>
            Rick Bot
          </Typography>
        </Box>
        <Stack direction={"column"}>
          <Box
            sx={{
              height: 400,
              overflowY: "auto",
              border: "2px solid #0ff",
              p: 2,
              borderRadius: 2,
            }}
          >
            {messages.map((msg, index) => (
              <Typography
                key={index}
                sx={{ color: msg.sender === "Você" ? "#0f0" : "#ff0" }}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </Typography>
            ))}
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Pergunta algo, gênio..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{ mt: 2, bgcolor: "#222", color: "#fff", borderRadius: 1 }}
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSendMessage}
            sx={{ mt: 1 }}
          >
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
