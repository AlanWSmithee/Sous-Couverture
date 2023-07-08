import * as Dialog from '@radix-ui/react-dialog'
import * as Form from '@radix-ui/react-form'
import './dialog.css'
import { CheckboxDemo } from '../checkbox/checkbox'
import { useState } from 'react'
import { SliderDemo } from '../slider/slider'

export function ButtonDialog() {
  const [checkbox, setCheckbox] = useState(false)
  function handleCheckox(checkbox: boolean) {
    setCheckbox(checkbox)
  }
  const wait = () => new Promise((resolve) => setTimeout(resolve, 5000));
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="Button violet">Create a game</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Form.Root
          onSubmit={(event) => {
            wait().then(() => setOpen(false))
            event.preventDefault()
          }}>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">Create a game</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description>
            <Form.Root>
              <Form.Field className="Fieldset FormField" name="game-name">
                <Form.Label className="Label">Game's name</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter a name for the game
                </Form.Message>
                <Form.Control asChild>
                  <input
                    className="Input"
                    id="game-name"
                    defaultValue="Your game's name here"
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field className="Fieldset FormField" name="username">
                <Form.Label className="Label">Username</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter your username
                </Form.Message>
                <Form.Control asChild>
                  <input
                    className="Input"
                    id="username"
                    defaultValue="Your nickname here"
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field className="Fieldset FormField" name="player-number">
                <SliderDemo titleLabel="Nombre de joueurs" />
              </Form.Field>
              <CheckboxDemo
                checked={checkbox}
                onChange={handleCheckox}
                titleLabel="Private game"
              />
              {checkbox && (
                <Form.Field className="Fieldset FormField" name="game-password">
                  <Form.Label className="Label">Password</Form.Label>
                  <Form.Message className="FormMessage" match="valueMissing">
                    Please enter a password
                  </Form.Message>
                  <Form.Control asChild>
                    <input
                      type="password"
                      className="Input"
                      id="game-password"
                      defaultValue=""
                      required
                    />
                  </Form.Control>
                </Form.Field>
              )}
              <Form.Submit asChild>
                <div
                  style={{
                    display: 'flex',
                    marginTop: 25,
                    justifyContent: 'flex-end',
                  }}>
                  <Dialog.Close asChild>
                    <button className="Button green" type="submit">
                      Create the game
                    </button>
                  </Dialog.Close>
                </div>
              </Form.Submit>
            </Form.Root>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                X
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Form.Root>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
