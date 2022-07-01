
import './style.css';

const DefaultButton = ({ styles, name, click }:
  { styles?:React.CSSProperties, name?:string, click?:React.MouseEventHandler<HTMLButtonElement> }
) => {
  return (
    <button type="button" className="app-default-button" 
      style={styles} 
      onClick={click}
    >
      { name }
    </button>
  );
}

export default DefaultButton;