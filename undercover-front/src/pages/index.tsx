import { AppDialog } from '@/component/dialog/app-dialog'
import * as Form from '@radix-ui/react-form'
import { useState } from 'react'
import { AppCheckbox } from '@/component/checkbox/app-checkbox'
import { AppSlider } from '@/component/slider/app-slider'

export function Index() {
  const [openCreate, setOpenCreate] = useState(false)
  const [openJoin, setOpenJoin] = useState(false)
  const [slider, setSlider] = useState([3])

  function handleSlider(slider: number[]) {
    setSlider(slider)
  }

  const [checkbox, setCheckbox] = useState(false)
  function handleCheckox(checkbox: boolean) {
    setCheckbox(checkbox)
  }

  const [gameNameCreate, setGameNameCreate] = useState("Your game's name here")
  const [userNameCreate, setUserNameCreate] = useState('Your nickname here')
  const [passwordCreate, setPasswordCreate] = useState('')

  const [gameNameJoin, setGameNameJoin] = useState("The game's name here")
  const [userNameJoin, setUserNameJoin] = useState('Your nickname here')
  const [passwordJoin, setPasswordJoin] = useState('')

  return (
    <>
      <AppDialog
        open={openCreate}
        setOpen={setOpenCreate}
        titleModal="Create a game"
        descriptionModal="Make changes to your profile here. Click save when you're done.">
        <Form.Root
          onSubmit={(event) => {
            setOpenCreate(false)
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
                  value={gameNameCreate}
                  onChange={(e) => setGameNameCreate(e.target.value)}
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
                  value={userNameCreate}
                  onChange={(e) => setUserNameCreate(e.target.value)}
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
                    value={passwordCreate}
                    onChange={(e) => setPasswordCreate(e.target.value)}
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

      <AppDialog
        open={openJoin}
        setOpen={setOpenJoin}
        titleModal="Join a game"
        descriptionModal="Join a game here">
        <Form.Root
          onSubmit={(event) => {
            setOpenJoin(false)
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
                  value={gameNameJoin}
                  onChange={(e) => setGameNameJoin(e.target.value)}
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
                  value={userNameJoin}
                  onChange={(e) => setUserNameJoin(e.target.value)}
                  className="Input"
                  id="username"
                  required
                />
              </Form.Control>
            </div>
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
                    value={passwordJoin}
                    onChange={(e) => setPasswordJoin(e.target.value)}
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
