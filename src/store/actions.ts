// Action constants
export const ADD_TODO = "[TODO] Add Todo";

// Action creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any) {}
}
