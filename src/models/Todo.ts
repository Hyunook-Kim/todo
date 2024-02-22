export interface Todo {
  id: string;
  text: string;
  status: StatusType | "0" | "1";
}

export enum StatusType {
  ACTIVE = 0,
  DONE = 1,
}

export const StatusTypeNameMap = {
  [StatusType.ACTIVE]: "Active",
  [StatusType.DONE]: "Done",
};
