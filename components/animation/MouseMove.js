import mouseMove from '../../common/mouseMoveAnimation';
import { useEffect } from 'react';

function MouseMove({ addClassName, imgSrc, dataDepth }) {
  useEffect(() => {
    mouseMove()
  }, []);
  return (
    <li className={`${addClassName} scene`}>
      <img
        src={imgSrc}
        data-depth={dataDepth}
        alt="Mouse Move Image"
      />
    </li>
  );
}

export default MouseMove;