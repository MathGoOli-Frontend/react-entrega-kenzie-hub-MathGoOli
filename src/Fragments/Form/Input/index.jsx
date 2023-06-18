import { forwardRef, useState } from "react"
import { StyledDiv, StyledPasswordInputDiv, StyledPasswordDiv } from "./style"
import eye from "./src/eye.svg"

export const Input = forwardRef(({label, id, placeholder, type, ...rest}, ref) => {
    return (
       <StyledDiv>
          {label ? <label htmlFor={id}>{label}</label> : null}
            <input 
             type={type} 
             id={id} 
             name={id} 
             placeholder={placeholder} 
             ref={ref}
             {...rest} 
           />
       </StyledDiv>
    )
 });

 export const PasswordInput = forwardRef(({label, id, placeholder, ...rest}, ref) => {
      const [type, setType] = useState("password")

      const changeType = () => {
         if(type === "password"){
            setType("text")
         } else if (type === "text"){
            setType("password")
         }
      }
   return (
      <StyledPasswordDiv>
         {label ? <label htmlFor={id}>{label}</label> : null}
            <StyledPasswordInputDiv>
               <input 
                  type={type}
                  id={id} 
                  name={id} 
                  placeholder={placeholder} 
                  ref={ref}
                  {...rest} 
                  />
               <button type="button" onClick={changeType}><img src={eye} alt="" /></button>
            </StyledPasswordInputDiv>
      </StyledPasswordDiv>
   )
});