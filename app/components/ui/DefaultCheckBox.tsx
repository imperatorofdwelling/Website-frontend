export default function DefaultCheckBox({
    name,
    value,
    checked = false,
    onChange
}: {
    name: string
    value: string
    checked?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <label className="flex items-center cursor-pointer relative">
            <input
                type="radio"
                name={name}
                value={value}
                defaultChecked={checked}
                onChange={onChange}
                className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-[6px] shadow border-light_grey hover:shadow-md border checked:border-blue checked:bg-blue"
            />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </span>
        </label>
    )
}
