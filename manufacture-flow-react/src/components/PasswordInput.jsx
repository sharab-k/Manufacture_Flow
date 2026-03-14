import { usePasswordToggle } from '../hooks/usePasswordToggle'

export default function PasswordInput({ id, placeholder, className, value, defaultValue, onChange }) {
  const [visible, toggleVisibility] = usePasswordToggle()

  return (
    <div className="relative">
      <input
        type={visible ? 'text' : 'password'}
        id={id}
        placeholder={placeholder}
        className={className}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600"
      >
        <i className={`ph ${visible ? 'ph-eye' : 'ph-eye-slash'} text-xl`}></i>
      </button>
    </div>
  )
}
