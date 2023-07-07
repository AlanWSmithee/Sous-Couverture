import * as Slider from '@radix-ui/react-slider'
import './slider.css'
import { useState } from 'react'

type sliderProps = {
  titleLabel: string
}

export function SliderDemo({ titleLabel }: sliderProps) {
    const DEFAULT_SLIDER_VALUE = 3;
    const [slider, setSlider] = useState(DEFAULT_SLIDER_VALUE)
  function handleSlider(slider: number) {
    setSlider(slider)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label className="Label" htmlFor="slider">
        {titleLabel}: {slider}
      </label>
      3
      <Slider.Root
        className="SliderRoot"
        defaultValue={[DEFAULT_SLIDER_VALUE]}
        onValueChange={handleSlider}
        max={20}
        min={3}
        step={1}>
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>
      20
    </div>
  )
}
