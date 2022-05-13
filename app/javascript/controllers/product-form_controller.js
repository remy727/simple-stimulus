import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ['name', 'counter']
  }

  countCharacters(event) {
    const length = this.nameTarget.value.length
    this.counterTarget.innerText = length
  }
}
