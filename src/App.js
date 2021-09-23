import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App= () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="dd1ff7b2-b3a5-461b-9980-9a234829e65a"
            userName="bharathm"
            userSecret="1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
            
        />
    );
}

export default App;