import "@/styles/scss/ui/_layout.scss";
import "@/components/form/form.scss"
import PropTypes from 'prop-types';

export default function InputField(props:any) {
    const { placeholder, disabled, onKeyUp, onKeyDown, value, onChange } = props;


    return (
        <div className="inputField">
            <div className="contentBox">
                <input className="input" type="text" placeholder={placeholder} />
            </div>
        </div>
    )
}

InputField.propTypes = {
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    onKeyUp: PropTypes.func,
    onKeyDown: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func
};

InputField.defaultProps = {
    placeholder: "",
    disabled: false,
    onKeyUp: () => {},
    onKeyDown: () => {},
    value: "",
    onChange: () => {}
};