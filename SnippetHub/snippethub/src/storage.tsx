import { Snippet } from "./types/snippet";

const STORAGE_KEY = "snippets";

export function saveSnippets(snippets: Snippet[]) {
  // Convert tags to string if needed
  const cleanSnippets = snippets.map((s) => ({
    ...s,
    tags: typeof s.tags === "string" ? s.tags : "", // force string
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanSnippets));
}

export function loadSnippets(): Snippet[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  try {
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
