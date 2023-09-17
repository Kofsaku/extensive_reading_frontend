import type { Article } from '../types';  // types.tsがある場合

export async function fetchArticleById(id: number): Promise<Article> {
  const response = await fetch(`http://172.24.0.3:3000/articles/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch article with id ${id}`);
  }
  return response.json();
}
