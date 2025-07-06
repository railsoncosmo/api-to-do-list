export type Todo = {
  id: string;
  description: string;
  isCompleted: boolean;
  url_image: string;
}

export interface CreateTodo {
  description: string;
  isCompleted: boolean;
  url_image: string;
}
