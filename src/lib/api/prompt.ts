import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyD8j5ZhhjBxqNNkWwbKA8a22B2ppj4XvFw";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash", // Or your preferred model
});

const generationConfig = {
  temperature: 0.0,
  topP: 0.5,
  topK: 20,
  maxOutputTokens: 100,
  responseMimeType: "text/plain",
};

export async function generateText(prompt: string) {
  //   const fullPrompt = `You are a friendly and helpful AI assistant named "Sparky".`;
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating text:", error);
    return "Error generating text. Please check the console for details.";
  }
}
