import { task } from "../types/task";

export function toTaskModel(obj: any): task {
  return {
    id: obj.id,
    authorId: obj.author_id,
    deadline: obj.deadline,
    description: obj.description,
    title: obj.title,
  };
}
