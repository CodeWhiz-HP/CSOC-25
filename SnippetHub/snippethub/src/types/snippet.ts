
export interface Snippet {
    id: string;
    title: string;
    content: string;
    category: string;
    tags: string;
    pinned: boolean;
    type: 'text' | 'link' | 'code' | 'file';
    fileName?: string;
  fileUrl?: string; 
}