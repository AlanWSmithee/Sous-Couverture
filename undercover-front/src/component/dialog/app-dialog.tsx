import * as Dialog from '@radix-ui/react-dialog'
import './dialog.css'

import { Dispatch, ReactNode, SetStateAction } from 'react'


export function AppDialog({ children, open, setOpen }: { children: ReactNode, open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="Button violet">Create a game</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Create a game</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
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
