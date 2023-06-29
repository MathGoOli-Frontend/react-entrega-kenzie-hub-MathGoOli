

export const Label = ({label, value}) => {

    return(
        <div>
            {label ? <label >{label}</label> : null}
            <h2>{value}</h2>
        </div>
    )
}
