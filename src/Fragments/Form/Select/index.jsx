import { forwardRef } from "react"


export const Select = forwardRef(({children, label, id, placeholder, type, ...rest}, ref) => {
    return (
       <div>
          {label ? <label htmlFor={id}>{label}</label> : null}
            <select
             id={id} 
             name={id}
             ref={ref}
             {...rest}
            > {children}</select>
       </div>
    )
 });