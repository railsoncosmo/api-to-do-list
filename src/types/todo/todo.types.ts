export type Todo = {
  id: string;
  description: string;
  isCompleted: boolean;
  url_image: string | null;
};

export interface CreateTodo {
  description: string;
  isCompleted: boolean;
  url_image: string | null;
}

export interface UpdateTodo {
  id: string;
  description?: string;
  isCompleted?: boolean;
  url_image?: string | null;
};
