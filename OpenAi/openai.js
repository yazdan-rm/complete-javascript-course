const OpenAI = require("openai");


const openai = new OpenAI({apiKey: "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"});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Iran description" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();