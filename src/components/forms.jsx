


export const Input = ({placeholder, id, type, label}) => {

    return (
        <div>
            <label for={id}>{label}</label>
            <input type={type} placeholder={placeholder} id={id} name={id} required />
        </div>
    )

}

export const Textarea = ({placeholder, id, label}) => {

    return (
        <div>
            <label for={id}>{label}</label>
            <textarea  placeholder={placeholder} id={id} name={id} required></textarea>
        </div>
    )

}
