import axios from "axios";
const fetchData = async (input) => {
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: `${input}`,
      model: "gpt-3.5-turbo",
      max_tokens: 200,
      n: 1,
      stop: ".",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
    }
  );

  return response.data.choices[0].text;
};
export default fetchData;
