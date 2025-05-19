import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    const loadingMsg = { sender: 'bot', text: 'Loading...' };

    setChat(prev => [...prev, userMsg, loadingMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:3000/api/hf_chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      setChat(prev => [
        ...prev.slice(0, -1),
        { sender: 'bot', text: data.reply }
      ]);
    } catch (error) {
      console.error(error);
      setChat(prev => [
        ...prev.slice(0, -1),
        { sender: 'bot', text: "Something went wrong. Try again." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="px-6 py-3 bg-black text-white font-lato rounded-lg flex items-center gap-2 group hover:bg-secondary transform duration-300 ease-in-out shadow-lg"
        >
          💬 Need Help?
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-[430px] bg-gray-50 shadow-xl border border-gray-200 rounded-2xl flex flex-col overflow-hidden relative">
          <button
            onClick={toggleChat}
            className="absolute top-2 right-2 text-black text-md hover:text-gray-600"
            aria-label="Close Chat"
          >
            ×
          </button>

          {/* Header (can keep minimal or remove) */}
          <div className="px-3 py-2 border-b border-gray-300">
            <span className="font-semibold text-gray-700 text-sm font-tuffy">Aurora</span>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto">
            {chat.map((msg, i) => (
              <div
                key={i}
                className={`p-2 text-sm rounded-xl max-w-[80%] ${msg.sender === 'user'
                    ? 'bg-yellow-100 ml-auto text-right'
                    : 'bg-white text-left'
                  }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-2 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={loading ? "Waiting for reply..." : "Ask me anything..."}
              disabled={loading}
              className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none"
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="ml-2 bg-yellow-400 hover:bg-secondary text-white px-3 py-1.5 text-sm rounded-md disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
