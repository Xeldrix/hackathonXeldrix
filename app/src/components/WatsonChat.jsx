"use client";
import { useEffect } from "react";

export default function WatsonChat() {
  useEffect(() => {
    if (window.watsonAssistantChatOptions) return;

    window.watsonAssistantChatOptions = {
      integrationID: "6a96a15e-41ac-4ba1-a816-bafc1e5d78f4", 
      region: "au-syd", 
      serviceInstanceID: "e2caeffb-beef-4049-8eff-b1e368c27106", 
      onLoad: async (instance) => {
        await instance.render();
      },
    };

    const script = document.createElement("script");
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.watsonAssistantChatOptions;
    };
  }, []);

  return null;
}
