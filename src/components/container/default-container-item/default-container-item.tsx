
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

    const multiplication = ( (20 - ((20 * Math.ceil( ((index+1)/20) ))-index)) ) + 1;

    $this.style.minHeight = '30vh';

    setTimeout(() => {

      $this.style.minHeight = 'unset';

      $this.style.opacity = '100%';

      $this.style.transform = 'scale(1)';

      setItemProps(newItemProps);


    }, 100*multiplication);

    // smooth effect.
  
  }

}

const DefaultContainerItem = ({item, link, index}:ContainerItemProps) => {

  const [ itemProperties, setItemProperties ] = useState({
    src: 'https://i.pinimg.com/originals/a5/a8/31/a5a8318c9abc50a09f836028a41c6985.gif',
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