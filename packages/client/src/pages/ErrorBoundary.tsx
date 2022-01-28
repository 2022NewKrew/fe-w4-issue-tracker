import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태 업데이트
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 에러 로그 출력
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <h1>
          죄송합니다. 지금은 서비스에 오류가 발생하였습니다
          <div className=""></div>
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
