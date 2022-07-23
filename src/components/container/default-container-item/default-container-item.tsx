
import './style.css';
import { ContainerItemProps, ItemProperties } from "../container-item/container-item-types";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

const handleOnLoad = (
  ref: React.RefObject<HTMLAnchorElement>,
  setItemProps: React.Dispatch<React.SetStateAction<ItemProperties>>,
  newItemProps: { src:string, title:string },
  index:number=1
) => {

  if (ref.current) {

    const $this = ref.current;

    // prev: ( (20 - ((20 * Math.ceil( ((index+1)/20) ))-index)) ) + 1;

    const time = -1 * ( 20 * Math.floor(index / 20) - index ) + 1;

    $this.style.height = '30vh';

    setTimeout(() => {

      $this.style.height = 'unset';

      $this.style.opacity = '100%';

      setItemProps(newItemProps);

      $this.style.transform = 'scale(1)';

    }, 100*time);

    // smooth effect.
  
  }

}

const DefaultContainerItem = ({item, link, index}:ContainerItemProps) => {

  const [ itemProperties, setItemProperties ] = useState({
    src: 'https://i.pinimg.com/originals/ff/e1/bb/ffe1bb70f9393f0c115df6a33773f937.gif',
    title: 'LOADING ...'
  });

  const $this = useRef<HTMLAnchorElement>(null);

  useEffect (() => {

    handleOnLoad($this, setItemProperties, {src:item.poster, title:item.name}, index);

  }, []);

  return (
    <NavLink to={link || '#'} className="default-container-item" ref={$this} >
      <img src={itemProperties.src} alt="" />
      <span>{itemProperties.title}</span>
    </NavLink>
  );

}

export default DefaultContainerItem;