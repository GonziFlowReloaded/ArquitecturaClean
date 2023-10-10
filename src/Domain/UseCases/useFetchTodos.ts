import { useQuery } from "@tanstack/react-query";
import { TodoRepositoryImpl } from "../../Data/Repositories/TodoRepositoryImpl";
import { Todo } from "../../Domain/Models/Todo";

export const useFetchTodos = (repository: TodoRepositoryImpl) => {
  const { data, isLoading } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: () => repository.getTodos(),
  });

  return {
    
    todos: data?.slice(-10),
    isFetchTodosLoading: isLoading,
    
  };
};
