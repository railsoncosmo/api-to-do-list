export type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
  url_image: string;
};

export type CreateNewTask = {
  description: string;
  isCompleted: boolean;
  url_image: File |  null;
};

