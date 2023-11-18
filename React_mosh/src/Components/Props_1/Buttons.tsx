interface Props {
    children: string;
    onClick: ()=> void;
    // color?: string;  //the ? indicates that it is optional.
    color?:  'primary' | 'secondary' | 'danger'; //making it multiple default values.so it will take one of these values only and not the values passed in app component.
}

                                  // default value os primary for color
function Buttons({ children,  onClick, color = "primary"}: Props) {
  return (
    
    // <button className="btn btn-primary" onClick = {onClick}>{children}</button>
    <button className={"btn btn-" + color} onClick = {onClick}>{children}</button>


  )
}

export default Buttons