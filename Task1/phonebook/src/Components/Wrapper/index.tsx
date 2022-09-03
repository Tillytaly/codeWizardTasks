import {TWrapperProps} from "./types"
import styles from "./Wrapper.module.scss"
const {wrapper} = styles;
const Wrapper = ({children}: TWrapperProps) =>{
return (
    <div className={wrapper}>
{children}
    </div>
)
}

export {Wrapper}