import "./Button.module.scss"

function Button({children , event,...props}) {
    return <button onClick={event} {...props}>{children}</button>
}
export default Button