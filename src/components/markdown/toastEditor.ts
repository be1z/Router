export default class {
  editor
  constructor(el: string, height: string, initialValue: string) {
    this.editor = new toast.Editor({
      el: document.querySelector(el),
      height: height,
      initialValue: initialValue,
      previewStyle: 'vertical',
    })
  }
}
