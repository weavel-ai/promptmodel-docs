export function parseMultipleJson(response: string): Record<string, any>[] {
  try {
    const singleJsonObject = JSON.parse(response)
    return [singleJsonObject]
  } catch (error) {
    // Continue with existing logic if parsing as a single JSON object fails
  }
  const jsonObjects: Record<string, any>[] = []
  let braceCount = 0
  let startIndex: number | null = null

  for (let i = 0; i < response.length; i++) {
    const char = response[i]

    if (char === '{') {
      if (braceCount === 0) {
        startIndex = i
      }
      braceCount++
    } else if (char === '}') {
      braceCount--

      if (braceCount === 0 && startIndex !== null) {
        const jsonString = response.substring(startIndex, i + 1)
        try {
          const jsonObject = JSON.parse(jsonString)
          jsonObjects.push(jsonObject)
        } catch (error) {
          // Skip the current substring if JSON parsing fails
        }
        startIndex = null
      }
    }
  }
  return jsonObjects
}
