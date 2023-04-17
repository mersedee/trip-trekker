import { type FC, useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'react-feather'

interface Menu {
  label: string
  value: string
}

interface Props {
  label: string
  menus: Menu[]
  width?: number
}

const DropDown: FC<Props> = ({ label, menus, width }) => {
  const fLabel = { label, value: '' }
  const [open, setOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<Menu>(fLabel)
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: any): void => {
    const target = event.target as HTMLElement
    if ((ref.current != null) && !ref.current.contains(target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  },
  [ref])

  const Toggle = (): void => { setOpen((prevOpen) => !prevOpen) }

  const handleOptionClick = (option: Menu): void => {
    setSelectedOption(option)
    Toggle()
  }

  return (
    <div ref={ref} className="relative w-fit">
      <button
        type="button"
        style={{ width: `${width}px` }}
        className="bg-white border border-gray-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex flex justify-between items-center"
        onClick={Toggle}
      >
        {selectedOption.label}
        <ChevronDown size={18} />
      </button>

      <div className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${open ? 'block' : 'hidden'}`}>
        <ul className="py-2 text-sm text-gray-700">
          {menus.map(menu => (
            <li
              key={menu.value}
              className="block px-4 py-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => { handleOptionClick(menu) } }
            >
              {menu.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DropDown
