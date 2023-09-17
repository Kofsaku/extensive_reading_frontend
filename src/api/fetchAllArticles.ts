export async function fetchAllArticles() {
    const response = await fetch(`http://172.24.0.3:3000/articles`);
    if (!response.ok) {
        const errorText = await response.text(); // APIからのレスポンスボディを取得
        throw new Error(`Failed to fetch articles. API Response: ${errorText}`);
    }
    return response.json();
}
