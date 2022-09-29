export interface ISuggestionItem {
  id: number;
  title: string;
  category: string;
  comments: IComment[];
  description: string;
  status: string;
  upvotes: number;
}

export interface IComment {
  id: number;
  user: any;
  content: string;
}
