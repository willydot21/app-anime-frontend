
import './style.css';

const DefaultContainer = ({ children }:{ children:React.ReactNode }) => {
  return (
    <div className="default-container">
      { children }
    </div>
  )
}

export default DefaultContainer;