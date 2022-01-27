import * as semantic from "semantic-ui-react";

import Layout from "./Layout";

const ComponentsPage = () => {
  return (
    <Layout>
      <semantic.Header as="h2">Components Page</semantic.Header>
      <p>
        Issue Tracker 프로젝트에 사용할 컴포넌트 렌더링을 테스트하는
        페이지입니다!!!
      </p>
      <semantic.Header as="h3">Elements</semantic.Header>
      <semantic.Button>semantic.Button</semantic.Button>
      <semantic.Container>semantic.Container</semantic.Container>
      <semantic.Divider>semantic.Divider</semantic.Divider>
      <semantic.Flag>semantic.Flag</semantic.Flag>
      <semantic.Header>semantic.Header</semantic.Header>
      <semantic.Icon>semantic.Icon</semantic.Icon>
      <semantic.Image>semantic.Image</semantic.Image>
      <semantic.Input>semantic.Input</semantic.Input>
      <semantic.Label>semantic.Label</semantic.Label>
      <semantic.List>semantic.List</semantic.List>
      <semantic.Loader>semantic.Loader</semantic.Loader>
      <semantic.Placeholder>semantic.Placeholder</semantic.Placeholder>
      <semantic.Reveal>semantic.Reveal</semantic.Reveal>
      <semantic.Segment>semantic.Segment</semantic.Segment>
      <semantic.Step>semantic.Step</semantic.Step>
    </Layout>
  );
};

export default ComponentsPage;
