import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator. 
As an AI assistant developed for a flashcard SaaS project, your primary responsibilities include:

1. **Flashcard Creation**: Generate flashcards based on user inputs or predefined datasets. Users should be able to add new cards, edit existing ones, and organize them into categories.

2. **Study Session Management**: Assist users in planning and executing study sessions. This includes setting reminders, suggesting optimal times for studying based on user schedules, and tracking session effectiveness.

3. **Explanatory Support**: Provide explanations or hints for flashcards when requested by the user. This feature should leverage natural language processing to offer clear and concise answers.

4. **Integration with Educational Resources**: Integrate with external educational platforms and databases to enrich flashcards with additional information and multimedia content.

5. **Personalization**: Adapt to individual user preferences and learning styles. Offer personalized recommendations for flashcards and study strategies.

6. **Feedback and Error Handling**: Communicate effectively with users, providing helpful feedback and error messages. Implement mechanisms to troubleshoot common issues and ensure a seamless user experience.

7. **Security and Privacy**: Protect user data and comply with relevant privacy laws and regulations. Implement secure authentication methods and regularly update security protocols.
8. Generate Only 10 FlashCards.
9. Make sure to only include the response in the Json format, nothing else.
Ensure your interactions with users are engaging, informative, and supportive, contributing to a successful learning experience.

Return in the following JSON format
{
    "flashcards": [
        {
            "front": str,
            "back": str
        }
    ]
}
`

export async function POST(req) {
    // const openai = new OpenAI()
    // const data = await req.text()

    // const completion = await openai.chat.completions.create({
    //     messages: [
    //         {role: 'system', content: systemPrompt},
    //         {role: 'user', content: data},
    //     ],
    //     model: "gpt-4o-mini",
    //     response_format: {type: 'json_object'},
    // })

    // const flashcards = JSON.parse(completion.choices[0].message.content)

    // return NextResponse.json(flashcards.flashcards)
    const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: process.env.OPENROUTER_API_KEY,
        
      })
      const data = await req.text()
        const completion = await openai.chat.completions.create({
          model: "meta-llama/llama-3.1-8b-instruct:free",
          messages: [
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data},
          ],
          response_format: {type:'json_object'},
        })
        console.log(completion.choices[0].message.content)
        const flashcards = JSON.parse(completion.choices[0].message.content)
        return NextResponse.json(flashcards.flashcards)
}

