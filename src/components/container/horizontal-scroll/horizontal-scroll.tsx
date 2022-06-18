
import './horizontal-scroll.css';
import { HorizontalScrollProps } from "./horizontal-scroll-types";

const HorizontalScroll = ({children}:HorizontalScrollProps) => {
  return (
    <div className="horizontal-scroll">
      {children}
    </div>
  );
}

export default HorizontalScroll;