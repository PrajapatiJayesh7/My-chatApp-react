import { ChatEngine } from "react-chat-engine";

import "./App.css";
import LoginFrom from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginFrom />;
  return (
    <ChatEngine
      height="100vh"
      projectID="e8f60e34-def9-4bce-87ca-55b87d39a91d"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
