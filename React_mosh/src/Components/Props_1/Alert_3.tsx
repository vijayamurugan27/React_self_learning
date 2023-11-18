import { ReactNode } from "react";
 
interface Props {
    children: ReactNode;
    onClose: ()=> void;
}

const Alert_3 = ({ children, onClose }:Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
  
    </div>
  )
}

export default Alert_3;