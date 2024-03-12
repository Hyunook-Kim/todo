export interface Todo {
  id: string;
  text: string;
  status: TodoStatusType;
}

export const TodoStatus = {
  active: "Active",
  done: "Done",
} as const;

// export type TodoStatusType = "Active" | "Done"
export type TodoStatusType = (typeof TodoStatus)[keyof typeof TodoStatus];

export const TodoStatusFilter = {
  ...TodoStatus,
  all: "All",
} as const;

export type TodoStatusFilterType =
  (typeof TodoStatusFilter)[keyof typeof TodoStatusFilter];
