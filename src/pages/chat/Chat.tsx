import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { sendMessageToRick } from "../../service/api";
import { Send } from "@mui/icons-material";

export default function Chat() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input) return
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
        bgcolor: "#FFF",
        color: "black",
        borderRadius: 2,
        padding: "0 !important",
        overflow: "hidden"
      }}
    >
      <Stack direction={"column"} textAlign={"center"}>
        <Box bgcolor={"#02afc5"} width={"100%"}>
          <Typography variant="h4" sx={{
            fontFamily: "Creepster, serif",
            color: "#97ce4c"
          }}>
            RICK BOT
          </Typography>
        </Box>
        <Stack>
          <Box sx={{ height: 400, overflowY: "auto", p: 2, bgcolor: "#f4f4f4" }}>
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: msg.sender === "Você" ? "flex-end" : "flex-start",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    maxWidth: "70%",
                    bgcolor: msg.sender === "Você" ? "#f0e14a" : "#02afc5",
                    color: "#fff",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body1">
                    <strong>{msg.sender}:</strong> {msg.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Pergunta algo, gênio..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              sx={{ mt: 2, borderRadius: 1 }}
              InputProps={{
                sx: { color: "#black" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSendMessage} color="primary">
                      <Send />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
