import { useState } from 'react'

function Modal({ isOpen, extraClass, children }) {
  return (
    <div className={'Modal-container ' + (isOpen ? 'active-Modal' : undefined)}>
      <section id="Modal" className={extraClass || ''}>
        {isOpen && <>{children}</>}
      </section>
    </div>
  )
}

export default Modal
