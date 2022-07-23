
import './style.css';

const SettingsSection = ({ name, children }:{ 
  name:string, children:React.ReactNode 
}) => (
  <div className="settings-section-container">
  <h3 className="settings-section-name"> {name} </h3>
  <div className="settings-section"> {children} </div>
  </div>
);

export default SettingsSection;