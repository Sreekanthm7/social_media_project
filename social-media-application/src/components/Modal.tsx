import { ReactNode } from "react"
import './Modal.css'
type ModalProps = {
   children: ReactNode
}

export function Modal({ children }: ModalProps) {
   return <div className="main-modal">
      {children}
   </div>
}