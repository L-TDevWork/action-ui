import React from "react";
import ChatBot from "react-chatbotify";

export const AppChatBot: React.FC<{}> = ({ }) => {
    const flow = {
        start: {
            message: "Hi! Welcome to ActionAid South Africa 👋. Please select one from the given options",
            path: "chat"
        },
        chat: {
            message: async (_: any) => {
                // i will either use the FAQs and answers or connect directly with chatGPT
                // Send message to your AI backend
                // const res = await fetch("https://your-backend.com/api/chat", {
                //     method: "POST",
                //     headers: { "Content-Type": "application/json" },
                //     body: JSON.stringify({ message: params.userInput })
                // });
                // const data = await res.json();
                // return data.reply; // the AI’s answer
            },
            path: "chat"
        }
    };

    return <ChatBot flow={flow}
        settings={{
            header: {
                title: "Mathapelo",
                showAvatar: true,
            },
        }} />;
};

