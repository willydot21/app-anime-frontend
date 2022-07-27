
import { fixBodyOverflow } from "../../../app.utils";
import TioanimeApi from "../../../services/api/tioanime/api";
import { AnimeLinks, ApiError } from "../../../services/api/tioanime/api-types";

const linkIcons = {
  mega: 'https://seeklogo.com/images/M/mega-icon-logo-75FF6A408B-seeklogo.com.png',
  fembed: 'https://cdn0.iconfinder.com/data/icons/social-network-9/50/25-512.png',
  amus: 'https://progsoft.net/images/server-status-icon-99d8bc5a82cad52b2079712236ef5ee4075df85d.png',
  okru: 'http://pngimg.com/uploads/odnoklassniki/odnoklassniki_PNG29.png',
  mepu: 'https://progsoft.net/images/server-status-icon-99d8bc5a82cad52b2079712236ef5ee4075df85d.png',
  yourupload: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAABoCAMAAADfNVtPAAAA/FBMVEX///9KZYIAAABUbolof5cEBAStucdedpDk6O38/P3x8/Xs7/IgICAbGxv29/lZcoyWprYWFhahr77b4ec9PT0xMTFHR0jR0dG4uLi8xtHH0NgdHR2hoqMODg8pKSlRa4dziJ9iYmLa29vFztl5eXnk5eXR2N98kKWls8KKiovj+fzS0tI4ODhNTU6QoLOZmZkzaJ9+yuHt+vy5yt18ncF9ocTB0uPb5vCSrctpjbZGc6UrZp1Bfa1XjriGrsypvtY9f69so8adw9spcqZEirYzg7JCkLpTnMKs0OOqzN9pr8/L5O9EmsFyudZPqMu43euF0uaP4O+k7PZtbm8+2Il5AAAL9UlEQVR4nO1caVvbOBcNxPEalOAsZCEkpcQEmpC2M4V55207belApwxdhv//X0aytVwtQAJ2mAd0PvSp7SvJObo6urqSKZUsVonwoV/AwsLCwsLCwsLCwsLC4gEQIP8XjF8J3rx5f3x8fBKFwUO/1aNE4B//9r/fXwL8P8Xp6enbd++PT5ClPT+g5I/ffjmJogCjRP6JMI7/ePP7y9OXpynrbz98Pv/46eLCsn5vBNGJfz2NyD9+/+7t21OCD39+Pjv7+Cla4cs9OgQILWCFTj59fPf5A8afmHPs6YW/1yNFsIRAoJO/3n0mODs7O//y3S/urR4rlmGbFTn569P5GWH829fvF4uMDQuGO9CdlYu+fDo/P//7729fL78f2il0JYi+fPn6DQNTbqOW1SA4+XL5FZN+aSlfGdDF98vLS0z5q4vXD/0uTwWY81eY9FeYcuvmK8Lri4tXBD8s5ysD5vwHZvzHz8NDS/qKgA4vfmLGCQjrdw05LZZAELw+PDz8meGffzDvrwnzlvuCEWCeCfMZXt/C+IstBpoQC8SdAo9phQCm6yXrKMin0roRIv/kVeWL6QZFa57dmfXZnVmBQyN2PApnYrpeAI0RK+LtF5M9FS043bzq3NpYp9jYSm+Mq+zG5nZejeiInDUGp2G4XgRxmRUp14t5S5e34C36UrdCEF7NhvKswm6082rDgG5NkBUYrhdAUOd01HLzP7kF4AW5DXZAeFrnVp9dt4rc5BBklWPT9QJoADoKUhSPv5SbW6WdTU54et1kl4O93NrQ8XQVpbQ3oARXmuRSOHiRgvKEFUUQnnk0d/Cd3dyaMODpKoogPA1StpnADJ5BoyCNzXdz6OYsnr2ToigB+k2KEtwSmgc3xe68HaEoTo6bmVeM8P4YX02Zg0/F24QH02qVhOX9arW9BcuOm1WGJiktLqcd1WCGL9FeK7VbQFGCScxBfn8jrjueU+/y17pWUYKEmJLQuR73DJwi9hwbuBqRaTue40ZQUcpujguSGSOcBCncwfuc2PGsyiyI0PfbYPg+E0/IBCDmXxrxAAMyYg5ag9QOkpUOVvUao+eUGUalUlLHl+SpF7Of3gODAqwCQ5eaEuuyU+8pP9ePxXNiEEujpsEelkdJKeFekOscsQOCFMQcvDKjT4NnOzwsZ9SO9bLZGqnNTStt1WDjYN7cZGspH5DlG65LUNSHo3jkiXCBqWndpCiBWxem6TNHUt8wFmzT+uqAcVxaPBiJ/+c6R7B1JQlSuJ5Pqc+Mm8C7oTOn2OURTbpoCvgSdX2zoxhUWnvTyjpbXLmArMBwjbtedMFarSb+z+dUYFDjXuwrdKdkAe/sAUI5sWKSnkilh6LNPBWFE46DFNSC/pryrdPN2VxOUXaykbKwokCSIZg7AwOuKL6BTxhmThytO2DxxDE8Jcg36mSE4yCFO3hb43swEMrC9GIZRVkfgJ5cSlGwq5WFs3EPNygK4BvqBo8wXP5YqtGjz0G3ywY5R52M8P6YOzhd0wdtTtfGs6umYDxbki6jKNBuWUXxjuoj8fOptxkUJRB8O0d18DzJniec0Nr+EajRo3QCB6/t1/eLUhRO08aceShb0+8JQdh7MT4AgpE9X0JRoN2SiuK5Dd8F+uGrBkwShAN7Xb9xJILGROmP4VEi1UhnTTBNY4OeUKd8FUUQfsUIY4IiBKHVQWNB//pOZrCMogC7JWOU/QaKYm0I6Iri81vDfR/5wkMp4V3RH8/DEAb+tLx4C9kgZ0VhhFc2WPzH1vQiTTu4GqNdcJktQlejKLVuCNmjEm5QFCEopIi27g+k/oj0VIIL+tiX+jhXRRE8VRRBEfsQ6/1OiLaAP2d8rkZRnAZCibbw1xUFDpMGCrWlq6ijPIlgF9I8IHwL2SDnzNhYdUO2phd0VZovUDQHfGaitxpFOYpQpA8BXVFiuciROiZECa8XhkCh9Q5TDfLNjIn9B+rNdE0fCLoGe1hRgLtOU4MlFaWy2a8276goGnvAwMkUBcHMiqwoDbmEqii0wxRFmRSlKCrhfE0PFaIThh3A/0FqMJM9elvY0zl1BnMC1XZnNzs7oCadDIoCJqwRloeeNgT0XBewwUUiFxggpYQbQY2iUwB8Kxd32Eg1KIpwtqYXeXHM5y4aHwgHzxRF9WiwRsrmVGCAqxD5F3U6M6S1of9FkrfpimJYB0WGMTHhZwJGSZSAJQ5tE75FgsLnhSmKQvgGW7WHgq7BAVYUodA0laLMkcC+v6sarLfBqFTT2HpaO5ICNClGcVUDOokqRfRZNv0qMD2g87w3GQm+r5kC9FGXG+ZSKMG31bYVRQH+nOVZ2rcpCuiiFkif3qAoLBxQFQV423WKIhcxzLKi/SMpoULbDOQpwC9OUcBych3u08uKEt1LUaTd6IdRFAbfVfJbBkVpFKooEuGbB+yupCj+PRWlOgbtPZCipFbdupoNX72iSISLffpcFaUJmns4RWnUnZqWnTUoSrExCtjSlPbpZUXx76UoPH2e/uwHUhSyR8c4BKJiUpQAFbfqKYFdYyi1kqJE91UUOG09jKIEMad7OJrs37xMDQpVlBKgSkhtnopSgQeKllQUH6FlFcU3KEoQi52J/R4UDE1Ryi4qNEaB6++WuJtnjPIfUBSRmR0eNQwhiLTqCVCRMQrcdeQhymNTFODAo8SUR4GK4hesKCJFUl1IUTJ3vV5R6DC5g6LQwVuAoggHL8cRulFRcIwSQEV5njffYGEPgjegKDMco8C9nkwTRQ+k5+OAomQTr2rAAMcu0SbojEj98YSdSB8Cuv/JRfQxIZ6TNElX21zryYrS1VK3OUJ4IvjaASjE5hwrSlPd69mWtzfH2sSrT6IZXIU+w0YZTEvL81dXNaAuH8lFtJhOlMCCIWXKtS7EMUopPFI7LEcAT6yKA0hAgHd6KOyAxHfGJ5xT8SWYU6miaJMobU5RFKSvCOW0tGGC0xc1YvdHzWTXlRJKppyqmJx9hz3K9vvzA6AWKArY65k1kH81UIzUEKTFL+nEq0+iGaAvEvr0ndxAiVG0IWDInsfXKYo2Zcp7b0wwlP083SBHGBWlBPd6fLQlFIXuBikhCIgsb1GUBBx+CCQqPBqE+5K3SRs3PdVA348jRYSieHWlRLqbryuKFKMYpoAcYVYU6MBzf1ecR2G7QW35SBDY2blZUcDgXvOQdJCEnYmFFknou1pEoitK6MAiDU5oud7QSvjR85v2eogBmDJXpSgwsfpsvif8vUlHGNjKqYYIHBC6RVGAL+HfFteBLxpOm5Xj7gRw6WrsUP8LPVDEPaopJaRjuF0XHKjSd4+HIxc0uTJFgXtjg00wIVLypH3+Kjw8fouiQElZK4tEqccPcYMfjy3AqdkyPVRsUBRAOC4iTj/op2zXhrUaOMBGFQVoNjEAla1IUSQPBmixPlH3+YFJZnCdosBJE0DwDRVFsXFVA554DcyVMpEKPdPjNbHSiq9rc1WKomy3M0z5AuaFRDhw8NsUBf84w68HfEPBkDbCGH0GRYFHrtZEaX62AUj8WtkzCIZE+HCoG+QHs6JgzZiuq9hoiyEACK1stlogsXWLopAPEFRyyl4s8kNCMPB4B6bcXQ2KYjgVXgZ9WEJwqughscpnh5zBOrPsjZwiY5SdCsOO/PcbOtNN4OSVQX8KM36lGT0rXhk056Umr4RlTcQdRVFK6icf5BsceI4MfDXW4zlVbDRh7up67LsfD2wOJ/C7B1KnC32T7WLiIkmpwb8ccnifxFnp7Huffd6Ck7uiRLMWxVQjZt6s9jc2CfrV6ZX6xebVtI+f4AdRKeCVtNgHbuKO6Y9RkE/Iaukvqjn1OIEWQjDS0zvBxPFqxIj7cuCKL9ug/wVd8uVZDcP05VqCGyT1kG4AFSBRKzHIvmgLksSl6K74T3Ci3c4co7Nrajfcms+3jU8WqbnRSxlLIoUZscxhJ9oaiWZ0DYIQ2yaJb/xTK2Fycz1LtPOoEIM1+EO/y1MAVJQn6G6rR8MZYpTLw2Ft0T8JZHEfdEcOxb5VlFUACTz0q1hYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWNwB/wIDYESw1IyL/QAAAABJRU5ErkJggg==',
  netu: 'data:image/png;base64,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',
  maru: 'data:image/png;base64,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'
}

export const getAnimeLinks = async (
  { id, episode }:{ id:string, episode:number },
  setServerLinks:React.Dispatch<React.SetStateAction<AnimeLinks>>,
  setLoading:React.Dispatch<React.SetStateAction<boolean>>
) => {
  
  setLoading(true);

  const links = await TioanimeApi.getAnimeChapter(id, episode);

  if (!(links as ApiError).message) { 

    setServerLinks(links as AnimeLinks);

  } else {

    setServerLinks({id, chapter:episode, links:{ download_links:{}, watch_links:{} }} as AnimeLinks);
    
  }

  setLoading(false);

}

const animeLinkClick = (
  newSelectedServer:{ src:string, server:string, episode:number },
  setSelectedServer:React.Dispatch<React.SetStateAction<{src:string, server:string, episode:number}>>
) => {

  fixBodyOverflow();

  setSelectedServer(newSelectedServer);

}

export const MapAnimeLinks = (
  animeLinks:AnimeLinks, 
  setSelectedServer:React.Dispatch<React.SetStateAction<{src:string, server:string, episode:number}>>
) => {

  const watchLinks = animeLinks.links.watch_links;

  const servers = Object.keys(watchLinks);

  return servers.map( server => {

    return watchLinks[server].map( link => (
      <li data-value={link} className="episode-server" data-bs-dismiss="modal" onClick={ () => animeLinkClick({src:link, server, episode:animeLinks.chapter}, setSelectedServer) }> 
        <div> <img className="server-icon" src={linkIcons[server as keyof typeof linkIcons]} /> {server} </div>
        { ['okru', 'fembed', 'mega'].includes(server) && <i className="material-icons">recommend</i> }
      </li>
    ));
    
  });

}