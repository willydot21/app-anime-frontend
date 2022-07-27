
import './404.css';

const AppNotFound = ({error}:{error?:string}) => (
  <div className="app-not-found">
    <img src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif"/>
    <p className="error-name">{error || 'url no encontrada.'}</p>
  </div>
)

export default AppNotFound;