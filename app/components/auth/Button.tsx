import clsx from 'clsx'

interface ButtonProps {
    text: string
    disabled: boolean
}

const Button: React.FC<ButtonProps> = ({ text, disabled }) => {
    const buttonClassName = clsx(
        'gap-2.5 self-stretch px-4 py-4 w-full text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active',
        {
            'cursor-not-allowed': disabled,
        },
    )
    return (
        <button disabled={disabled} className={buttonClassName}>
            {text}
        </button>
    )
}

export default Button
