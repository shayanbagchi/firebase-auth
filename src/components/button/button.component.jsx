import './button.styles.scss';

const BUTTON_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ text, buttonType, ...otherProps }) => {
    return(
        <button 
            className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
            {...otherProps}
        >
            {text}
        </button>
    );
}

export default Button;