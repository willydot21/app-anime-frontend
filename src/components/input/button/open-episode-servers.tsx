
export default function ActivatorEpisodeServers ({ handleClick }:{
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}) {  
  
  return (
    <button type="button" className="material-icons more-vert episode-btn" 
      data-bs-toggle="modal"
      data-bs-target="#episode-servers-modal"
      onClick={ handleClick }
    >  
      more_vert
    </button>
  );

}