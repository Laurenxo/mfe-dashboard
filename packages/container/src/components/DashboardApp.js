import React, { useEffect, useRef } from 'react';
import { mount } from 'dashboard/DashboardApp';
import { useHistory } from 'react-router-dom';

export default () => {
  const componentRef = useRef(null);

  useEffect(() => {
    mount(componentRef.current);
  }, []);

  return <div ref={componentRef} />
}