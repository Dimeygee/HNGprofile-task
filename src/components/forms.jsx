


export const Input = ({placeholder, id, type, label, value,  change, error, setError}) => {
    
    const style = {
        border: error ? "1px solid #F89687" : ""
    }

    const handleChange = e => {
        change(e.target.value)
        setError("")
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} value={value} placeholder={placeholder} style={style}  onChange={handleChange} id={id} name={id} />
            <small style={{ color: "#F83F23", fontSize:"14px",fontWeight: 400  }}>{error}</small>
        </div>
    )

}

export const Textarea = ({placeholder, id, label, value,  change, error, setError}) => {

    const style = {
        border: error ? "1px solid #F89687" : ""
    }

    const handleChange = e => {
        change(e.target.value)
        setError("")
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea  placeholder={placeholder} style={style} value={value}  id={id} name={id} onChange={handleChange} ></textarea>
            <small style={{ color: "#F83F23", fontSize:"14px",fontWeight: 400  }}>{error}</small>
        </div>
    )

}
