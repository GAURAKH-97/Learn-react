import React, { useEffect } from "react";

function withLogger(WrappedComponent) {
  return function EnhancedComponent() {

    useEffect(() => {
      console.log("Component Mounted:", WrappedComponent.name);
    }, []);

    return <WrappedComponent  />;
  };
}

export default withLogger;