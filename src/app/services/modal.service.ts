import { Injectable } from '@angular/core'
import { IModal } from './interfaces/modal.interface'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modals: IModal[] = []

  isModalVisible (id: string): boolean {
    return Boolean(this.modals.find((modal: IModal) => modal.id === id)?.visible)
  }

  toggleModal (id: string): void {
    const modal = this.modals.find((modal: IModal) => modal.id === id)
    if (modal == null) return
    modal.visible = !modal.visible
    console.log(this.modals)
  }

  register (id: string): void {
    this.modals.push({ id, visible: false })
  }

  unregister (id: string): void {
    this.modals = this.modals.filter((modal: IModal) => modal.id !== id)
  }
}
