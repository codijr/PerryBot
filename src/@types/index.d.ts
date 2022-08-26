export type Command = {
  name: string
  func?: (value: string) => void
  reply: string
}