import { Box } from "@mui/material";
import Chat from "./pages/chat/Chat";

function App() {
  return (
    <Box sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "background-image 0.5s ease-in-out",
      backgroundImage: {
        xs: "url('./public/phone-wallpaper.jpg')",
        md: "url('./public/pc-wallpaper.jpg')",
      },
    }}>
      <Chat />
    </Box>
  );
}

export default App;
