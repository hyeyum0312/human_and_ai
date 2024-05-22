import "@/styles/scss/ui/_layout.scss";
import "@/components/form/form.scss"
export default function InputField() {

    return (
        <div className="inputField">
            <div className="contentBox">
                <input className="input" type="text" placeholder="ex. 아이패드" />
            </div>
        </div>
    )
}