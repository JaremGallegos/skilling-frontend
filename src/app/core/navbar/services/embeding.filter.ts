export async function embeddingModel(text: string): Promise<number[]> {
  return text.split("").map(char => char.charCodeAt(0) % 10);
}

export function cosineSimilarity(vecA: number[], vecB: number[]) : number {
  let dotCourse = vecA.reduce((sum, a, i) => sum + a * (vecB[i] || 0), 0);
  let normA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  let normB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dotCourse / (normA * normB);
}
