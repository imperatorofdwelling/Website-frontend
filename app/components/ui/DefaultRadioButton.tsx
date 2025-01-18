export default function DefaultRadioButton({
    name,
    value,
    checked = false,
    onChange,
}: {
    name: string
    value: string
    checked?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <label className="inline-flex items-center cursor-pointer relative">
            <input
                type="radio"
                name={name}
                value={value}
                defaultChecked={checked}
                onChange={onChange}
                required
                className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-full border border-light_grey shadow hover:shadow-md checked:bg-blue checked:ring-2 checked:ring-blue focus:outline-none"
            />
            <span className="absolute bg-blue rounded-full w-3 h-3 peer-checked:opacity-100 opacity-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
    )
}
