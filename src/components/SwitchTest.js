import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function SwitchTest() {
  const [enabled, setEnabled] = useState(true)

  return (
    <div className="p-0 m-0">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-green-400' : 'bg-neutral-300'}
          relative inline-flex flex-shrink-0 h-[21px] w-[46px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-6' : 'translate-x-0.5'}
            pointer-events-none inline-block h-[16px] w-[16px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  )
}