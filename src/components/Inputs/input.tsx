const Input = (props: any) => {
  return ( 
     <input 
     type='text' 
     className={props.className}
     placeholder={props.placeholder} />
   );
}
 
export default Input;