import IList from "../../types/IList"
export default interface IStack<T> extends IList<T> {
  push(element: T): void
  pop(): T | undefined
  // peek(): T | undefined
  // isEmpty(): boolean
  // size(): number
}