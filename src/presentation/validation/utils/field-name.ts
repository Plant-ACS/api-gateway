// deno-lint-ignore-file no-explicit-any
export class UtilsFieldName {
  private otherData
  private generated = false
  constructor(
    private readonly fieldName: string,
    private readonly data: any
  ) {
    this.otherData = data
  }

  validateExistFieldName(): boolean {
    const keys = this.fieldName.split(".")

    if (!this.generated) {
      this.otherData = this.data
      this.generated = true
      keys.map((e) => {
        this.otherData = this.otherData[e]
        return this.otherData
      })
    }

    return (
      (keys.length < 2 && this.data[this.fieldName]) ||
      this.otherData !== undefined
    )
  }

  getDataType(): string {
    if (!this.validateExistFieldName()) return "undefined"
    return typeof this.otherData
  }

  getData(): any {
    if (!this.validateExistFieldName()) return undefined
    return this.otherData
  }
}
