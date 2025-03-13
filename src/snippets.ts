import { requestAPI } from './handler';

/**
 * The type for a Snippet.
 */
export type Snippet = string[];

/**
 * The Snippet Content interface
 */
export interface ISnippetContent {
  content: string;
}

/**
 * List the available snippets.
 */
export async function listSnippets(): Promise<Snippet[]> {
  return requestAPI<Snippet[]>('list');
}

/**
 * Fetch a snippet given its path.
 * @param snippet The path of the snippet to fetch.
 */
export async function fetchSnippet(snippet: Snippet): Promise<ISnippetContent> {
  const request: RequestInit = {
    method: 'POST',
    body: JSON.stringify({ snippet })
  };
  return requestAPI<ISnippetContent>('get', request);
}
