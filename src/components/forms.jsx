


export const Input = ({placeholder, id, type, label}) => {

    return (
        <div>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} id={id} required />
        </div>
    )

}

export const Textarea = ({placeholder, id, label}) => {

    return (
        <div>
            <label>{label}</label>
            <textarea  placeholder={placeholder} id={id} required></textarea>
        </div>
    )

}
