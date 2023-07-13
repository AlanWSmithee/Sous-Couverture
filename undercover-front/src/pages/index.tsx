import { AppDialog } from '@/component/dialog/app-dialog'
import * as Form from '@radix-ui/react-form'
import { useState } from 'react'
import { AppCheckbox } from '@/component/checkbox/app-checkbox'
import { AppSlider } from '@/component/slider/app-slider'

export function Index() {
  const [open, setOpen] = useState(false)
  const [slider, setSlider] = useState([3])

  function handleSlider(slider: number[]) {
    setSlider(slider)
  }

  const [checkbox, setCheckbox] = useState(false)
  function handleCheckox(checkbox: boolean) {
    setCheckbox(checkbox)
  }

  const [gameName, setGameName] = useState("Your game's name here")
  const [userName, setUserName] = useState('Your nickname here')
  const [password, setPassword] = useState('')
  
  return (
    <>
      <AppDialog
        open={open}
        setOpen={setOpen}
        titleModal="Create a game"
        descriptionModal="Make changes to your profile here. Click save when you're done.">
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
                  value={gameName}
                  onChange={(e) => setGameName(e.target.value)}
                  className="Input"
                  id="game-name"
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
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="Input"
                  id="username"
                  required
                />
              </Form.Control>
            </div>
          </Form.Field>
          <Form.Field className="Fieldset FormField" name="player-number">
            <AppSlider
              titleLabel="Players"
              slider={slider}
              onChangeSliderValue={handleSlider}
            />
          </Form.Field>
          <AppCheckbox
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="Input"
                    id="game-password"
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
