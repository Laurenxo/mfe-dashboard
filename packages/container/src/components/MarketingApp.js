import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default () => {
  const componentRef = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(componentRef.current, { onNavigate: ({ pathname: nextPathname }) => {
      const currentPath = history.location.pathname;

      if (currentPath !== nextPathname) {
        history.push(nextPathname);
      }
    }, initialPath: history.location.pathname});

    history.listen(onParentNavigate);
  }, []);

  return <div ref={componentRef} />
}