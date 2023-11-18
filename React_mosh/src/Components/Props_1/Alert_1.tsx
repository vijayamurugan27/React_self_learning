interface Props {
    text: string;
}



const Alert_1 = ({ text }:Props) => {
  return (
    <div className="alert alert-primary">{text}</div>
  )
}

export default Alert_1