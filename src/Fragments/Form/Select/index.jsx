import { forwardRef } from "react"

import { StyledDiv } from './style'

export const Select = forwardRef(({children, label, id, placeholder, type, ...rest}, ref) => {
    return (
       <StyledDiv>
          {label ? <label htmlFor={id}>{label}</label> : null}
            <select
             id={id} 
             name={id}
             ref={ref}
             {...rest}
            > {children}</select>
       </StyledDiv>
    )
 });