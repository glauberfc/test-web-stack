import { ChangeEvent, useEffect, useRef, useState } from 'react'

type SearchInputProps = {
  searchCallback: (value: string) => Promise<void> | void
  clearSearchCallback: () => Promise<void> | void
}

export default function SearchInput({
  searchCallback = () => {},
  clearSearchCallback = () => {},
}: SearchInputProps) {
  const [value, setValue] = useState('')
  const timeoutRef = useRef<NodeJS.Timeout>()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.value
    setValue(inputValue)
    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      if (inputValue === '') {
        return clearSearchCallback()
      }
      return searchCallback(inputValue)
    }, 400)
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  return (
    <>
      <label htmlFor="search-input" className="sr-only">
        Search input
      </label>
      <input
        id="search-input"
        type="search"
        placeholder="Search..."
        value={value}
        onChange={handleChange}
      />
    </>
  )
}
