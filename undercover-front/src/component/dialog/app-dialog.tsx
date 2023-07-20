import * as Dialog from '@radix-ui/react-dialog'
import './dialog.css'

import { Dispatch, ReactNode, SetStateAction } from 'react'

type TypesModal = {
  children: ReactNode
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  titleModal?: string
  descriptionModal: string
}

export function AppDialog({
  children,
  open,
  setOpen,
  titleModal,
  descriptionModal,
}: TypesModal) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {titleModal && (<button className="Button violet">{titleModal}</button>)}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">{titleModal}</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            {descriptionModal}
          </Dialog.Description>
          {children}
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
