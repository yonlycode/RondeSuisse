interface buttonProps {
    label :string,
    onClick :()=>void
}

export default ( {label, onClick} :buttonProps) => {
    return( <button onClick={onClick}>
        {label}
    </button>)
}