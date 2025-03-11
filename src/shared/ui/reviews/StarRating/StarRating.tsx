interface StarRatingProps {
    rating: number
}

export const StarRating = ({ rating }: StarRatingProps) => {
    return (
        <div className="flex gap-1">
            {Array.from({ length: rating }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24">
                    <path
                        d="M12 .587l3.668 7.455L24 9.588l-6 5.842L19.335 24 12 19.931 4.665 24 6 15.43 0 9.588l8.332-1.546z"
                        fill="#fff"
                    />
                </svg>
            ))}
        </div>
    )
}
