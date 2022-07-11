
import './style.css';
import { ContainerItemProps } from "../container-item/container-item-types";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from 'react';

const handleOnLoad = (ref:React.RefObject<HTMLAnchorElement>, index:number=1) => {

  if (ref.current) {

    const $this = ref.current;

    const multiplication = ( (20 - ((20 * Math.ceil( ((index+1)/20) ))-index)) ) + 1;

    const image = ($this.querySelector('img') as HTMLImageElement);

    const span = ($this.querySelector('span') as HTMLSpanElement);

    const prevImage = image.src; const prevTitle = span.textContent;

    image.style.minHeight = '28vh';

    image.src = 'https://i.pinimg.com/originals/a5/a8/31/a5a8318c9abc50a09f836028a41c6985.gif';

    span.textContent = 'LOADING ...'

    setTimeout(() => {
      $this.style.minHeight = 'unset'
      $this.style.opacity = '100%';
      $this.style.transform = 'scale(1)';
      image.src = prevImage;
      span.textContent = prevTitle;
    }, 100*multiplication);

    // smooth effect.
  
  }

}

const DefaultContainerItem = ({item, link, index}:ContainerItemProps) => {

  const $this = useRef<HTMLAnchorElement>(null);

  useEffect (() => {

    handleOnLoad($this, index);

  }, []);

  return (
    <NavLink to={link || '#'} ref={$this} className="default-container-item">
      <img src={item.poster} alt="" />
      <span>{item.name}</span>
    </NavLink>
  );

}

export default DefaultContainerItem;