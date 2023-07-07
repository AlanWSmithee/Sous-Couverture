import * as Dialog from '@radix-ui/react-dialog'
import './dialog.css'
import { CheckboxDemo } from '../checkbox/checkbox'
import { useState } from 'react'
import { SliderDemo } from '../slider/slider'

export function ButtonDialog() {
  const [checkbox, setCheckbox] = useState(false)
  function handleCheckox(checkbox: boolean) {
    setCheckbox(checkbox)
  }
  return (
    <Dialog.Root>
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
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="game-name">
              Game's name
            </label>
            <input
              className="Input"
              id="game-name"
              defaultValue="Your game's name here"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input
              className="Input"
              id="username"
              defaultValue="Your nickname here"
            />
          </fieldset>
          <SliderDemo titleLabel="Nombre de joueurs" />
          <CheckboxDemo
            checked={checkbox}
            onChange={handleCheckox}
            titleLabel="Private game"
          />
          {checkbox && (
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="game-password">
                Password
              </label>
              <input
                type="password"
                className="Input"
                id="game-password"
                defaultValue=""
              />
            </fieldset>
          )}
          <div
            style={{
              display: 'flex',
              marginTop: 25,
              justifyContent: 'flex-end',
            }}>
            <Dialog.Close asChild>
              <button className="Button green">Create the game</button>
            </Dialog.Close>
          </div>
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
