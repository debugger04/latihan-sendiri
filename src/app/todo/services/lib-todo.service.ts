import { Observable } from "rxjs";
import { Todo } from "../model/todo.model";

export interface LibTodoService {
    getAllTodo(): Observable<Todo[]>;
    saveTodo(todo: Todo): Observable<void>;
    getOneTodo(id: number): Observable<Todo>;
    toggleTodo(todo: Todo): Observable<void>;
    deleteTodo(todo: Todo): Observable<void>;
}