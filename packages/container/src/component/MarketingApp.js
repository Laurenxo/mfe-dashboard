import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp';

export default () => {
  const componentRef = useRef(null);

  useEffect(() => {
    mount(componentRef.current);
  });

  return <div ref={componentRef} />
}