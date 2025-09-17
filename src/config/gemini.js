import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = "AIzaSyCzwqkCyezRaJ7e7L2txJ5uH7duCq9D8J4";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}

export default main;
