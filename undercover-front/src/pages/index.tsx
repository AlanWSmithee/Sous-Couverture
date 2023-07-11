import { AppDialog } from '@/component/dialog/app-dialog'
import * as Form from '@radix-ui/react-form'
import { useState } from 'react'
import { CheckboxDemo } from '@/component/checkbox/checkbox'
import { SliderDemo } from '@/component/slider/slider'

export function Index() {

  const [checkbox, setCheckbox] = useState(false)
  function handleCheckox(checkbox: boolean) {
    setCheckbox(checkbox)
  }
  const [open, setOpen] = useState(false)
  return (
    <>
      <AppDialog open={open} setOpen={setOpen}>
        <Form.Root
          onSubmit={(event) => {
            setOpen(false)
            event.preventDefault()
          }}>
          <Form.Field className="Fieldset FormField" name="game-name">
            <Form.Label className="Label">Game's name</Form.Label>
            <div className="ErrorsMessages">
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
            </div>
          </Form.Field>
          <Form.Field className="Fieldset FormField" name="username">
            <Form.Label className="Label">Username</Form.Label>
            <div className="ErrorsMessages">
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
            </div>
          </Form.Field>
          <Form.Field className="Fieldset FormField" name="player-number">
            <SliderDemo titleLabel="Players" />
          </Form.Field>
          <CheckboxDemo
            checked={checkbox}
            onChange={handleCheckox}
            titleLabel="Private game"
          />
          {checkbox && (
            <Form.Field className="Fieldset FormField" name="game-password">
              <Form.Label className="Label">Password</Form.Label>
              <div className="ErrorsMessages">
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
              </div>
            </Form.Field>
          )}
          <Form.Submit asChild>
            <div
              style={{
                display: 'flex',
                marginTop: 25,
                justifyContent: 'flex-end',
              }}>
              <button className="Button green">Create the game</button>
            </div>
          </Form.Submit>
        </Form.Root>
      </AppDialog>
    </>
  )
}
