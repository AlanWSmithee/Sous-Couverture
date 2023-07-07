import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import './checkbox.css'

type checkboxProps = {
  checked: boolean
  titleLabel: string
  onChange: (checked: boolean) => void // eslint-disable-line no-unused-vars
}

export function CheckboxDemo({ checked, titleLabel, onChange }: checkboxProps) {
  function handleChange(checked: boolean) {
    onChange(checked)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label className="Label" htmlFor="checkbox">
        {titleLabel}
      </label>
      <Checkbox.Root
        checked={checked}
        onCheckedChange={handleChange}
        className="CheckboxRoot"
        id="checkbox">
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}
