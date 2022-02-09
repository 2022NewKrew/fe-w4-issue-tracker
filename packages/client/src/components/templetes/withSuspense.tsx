import { Suspense } from "react";

const withSuspense = (WrappedComponent: any) => {
  const Component = (props: any) => {
    return (
      <Suspense fallback={<div>로딩중</div>}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
  return Component;
};

export default withSuspense;
