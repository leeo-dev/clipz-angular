import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isVisible: boolean = false

  get isModalVisible (): boolean {
    return this.isVisible
  }

  toggleModal (): void {
    this.isVisible = !this.isVisible
  }
}
