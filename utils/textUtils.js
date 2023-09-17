export function nl2br(text) {
    const paragraphs = text.split('\n\n'); // 2つの改行で段落を分割
    return paragraphs.map(paragraph => paragraph.split('\n')); // 各段落内の改行で文を分割
}
