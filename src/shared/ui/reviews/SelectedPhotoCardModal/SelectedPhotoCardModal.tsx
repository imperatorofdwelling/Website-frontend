interface ModalProps {
    isOpen?: boolean
    onClose: () => void
    title?: string
    children?: React.ReactNode
}

export const SelectedPhotoCardModal = ({ isOpen, children }: ModalProps) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-1 flex justify-center z-50">
            <div className="bg-transparent p-6 w-[100%] max-w-md">
                <div>{children}</div>
            </div>
        </div>
    )
}
