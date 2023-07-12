import * as Slider from '@radix-ui/react-slider'
import './slider.css'

type sliderProps = {
  titleLabel: string
  slider: number[]
  // eslint-disable-next-line no-unused-vars
  onChangeSliderValue: (slider: number[]) => void
}

export function SliderDemo({
  titleLabel,
  slider,
  onChangeSliderValue,
}: sliderProps) {
  const DEFAULT_VALUE = [3]
  const MAX_VALUE = 20
  const MIN_VALUE = 3
  const STEP_VALUE = 1

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <label className="Label" htmlFor="slider">
        {titleLabel} : {slider}
      </label>
      <div style={{ display: 'flex', gap: '5px' }}>
        {MIN_VALUE}
        <Slider.Root
          value={slider}
          className="SliderRoot"
          defaultValue={DEFAULT_VALUE}
          onValueChange={onChangeSliderValue}
          max={MAX_VALUE}
          min={MIN_VALUE}
          step={STEP_VALUE}>
          <Slider.Track className="SliderTrack">
            <Slider.Range className="SliderRange" />
          </Slider.Track>
          <Slider.Thumb className="SliderThumb" aria-label="Volume" />
        </Slider.Root>
        {MAX_VALUE}
      </div>
    </div>
  )
}
