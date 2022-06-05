import { ChangeEvent, useEffect, useRef, useState } from 'react'

type SearchInputProps = {
  searchCallback: (value: string) => void
  clearSearchCallback: () => void
}

export default function SearchInput({
  searchCallback = () => {},
  clearSearchCallback = () => {},
}: SearchInputProps) {
  const [value, setValue] = useState('')
  const isDirtyRef = useRef(false)
  const searchCallbackRef = useRef(searchCallback)
  const clearSearchCallbackRef = useRef(clearSearchCallback)

  function hangleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value)
    if (!isDirtyRef.current) {
      isDirtyRef.current = true
    }
  }

  useEffect(() => {
    if (!isDirtyRef.current) return

    const handler = setTimeout(() => {
      value === ''
        ? clearSearchCallbackRef.current()
        : searchCallbackRef.current(value)
    }, 400)

    return () => clearTimeout(handler)
  }, [value])

  return (
    <>
      <label htmlFor="searchInput" className="sr-only">
        Search input
      </label>
      <input
        id="searchInput"
        name="search"
        placeholder="Search..."
        value={value}
        onChange={hangleChange}
      />
    </>
  )
}
