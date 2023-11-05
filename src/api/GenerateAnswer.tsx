type ResponseType = {
  generatedText: string
  conversation: object
  generated_text: string
  warnings: string[]
}



export default async function query(data): Promise<ResponseType> {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/satvikag/chatbot",
    {
      headers: {
        Authorization: `Bearer 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`
      },
      method: "POST",
      body: JSON.stringify(data)
    }
  )

  const result: ResponseType = await response.json()
  return result
}
