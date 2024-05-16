export default interface IList<T> {
  peek(): T | undefined
  isEmpty(): boolean
  get size(): number
}