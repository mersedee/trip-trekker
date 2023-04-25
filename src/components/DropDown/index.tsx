import { type FC, type Dispatch, type SetStateAction, useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'react-feather'
import { type Menu } from '@/types'

interface Props {
  menus: Menu[]
  width?: number
  selectedOption: Menu
  setSelectedOption: Dispatch<SetStateAction<Menu>>
}

const DropDown: FC<Props> = ({ menus, width, selectedOption, setSelectedOption }) => {
  const [open, setOpen] = useState<boolean>(false)
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
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div ref={ref} className="w-fit">
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
              className="block px-4 py-2 hover:bg-gray-50 cursor-pointer static z-20"
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
