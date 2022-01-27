import {
  Button,
  Container,
  Divider,
  Flag,
  Header,
  Icon,
  Image,
  Input,
  Label,
  List,
  Loader,
  Placeholder,
  Rail,
  Reveal,
  Segment,
  Step,
  Breadcrumb,
  Form,
  Grid,
  Menu,
  Message,
  Table,
  Advertisement,
  Card,
  Comment,
  Feed,
  Item,
  Statistic,
  Accordion,
  Checkbox,
  Dimmer,
  Dropdown,
  Embed,
  Modal,
  Popup,
  Progress,
  Rating,
  Search,
  Sticky,
  Tab,
  Transition,
  Visibility,
  Confirm,
  Pagination,
  Portal,
  Radio,
  Ref,
  Select,
  TextArea,
  TransitionablePortal,
} from "semantic-ui-react";

import Layout from "./Layout";

const ButtonExampleButton = () => <Button>Click Here</Button>;
const ContainerExampleContainer = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
  </Container>
);
const DividerExampleDivider = () => <Divider />;
const FlagExampleFlag = () => (
  <Segment>
    <Flag name="ae" />
    <Flag name="france" />
    <Flag name="myanmar" />
  </Segment>
);
const HeaderExamplePage = () => (
  <div>
    <Header as="h1">First Header</Header>
    <Header as="h2">Second Header</Header>
    <Header as="h3">Third Header</Header>
    <Header as="h4">Fourth Header</Header>
    <Header as="h5">Fifth Header</Header>
    <Header as="h6">Sixth Header</Header>
  </div>
);
const IconExampleDisabled = () => <Icon disabled name="users" />;
const ImageExampleImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/image.png"
    size="small"
  />
);
const InputExampleInput = () => <Input placeholder="Search..." />;
const LabelExampleBasic = () => (
  <Label>
    <Icon name="mail" /> 23
  </Label>
);
const ListExampleBasic = () => (
  <List>
    <List.Item>Apples</List.Item>
    <List.Item>Pears</List.Item>
    <List.Item>Oranges</List.Item>
  </List>
);
const LoaderExampleLoader = () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>

    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  </Segment>
);
const PlaceholderExamplePlaceholder = () => (
  <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
);
const RailExampleRail = () => (
  <Grid centered columns={3}>
    <Grid.Column>
      <Segment>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />

        <Rail position="left">
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail position="right">
          <Segment>Right Rail Content</Segment>
        </Rail>
      </Segment>
    </Grid.Column>
  </Grid>
);
const RevealExampleFade = () => (
  <Reveal animated="fade">
    <Reveal.Content visible>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        size="small"
      />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/ade.jpg"
        size="small"
      />
    </Reveal.Content>
  </Reveal>
);
const SegmentExampleSegment = () => (
  <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
);
const StepExampleStep = () => (
  <Step.Group>
    <Step>Shipping</Step>
  </Step.Group>
);
const BreadcrumbExample = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section link>Store</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
  </Breadcrumb>
);
const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);
const MessageExampleMessage = () => (
  <Message>
    <Message.Header>Changes in Service</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We
      recommend reviewing the changes.
    </p>
  </Message>
);
const TableExamplePagination = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>First</Label>
        </Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="3">
          <Menu floated="right" pagination>
            <Menu.Item as="a" icon>
              <Icon name="chevron left" />
            </Menu.Item>
            <Menu.Item as="a">1</Menu.Item>
            <Menu.Item as="a">2</Menu.Item>
            <Menu.Item as="a">3</Menu.Item>
            <Menu.Item as="a">4</Menu.Item>
            <Menu.Item as="a" icon>
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);
const AdvertisementExampleAdvertisement = () => (
  <Advertisement unit="medium rectangle">
    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
  </Advertisement>
);
const CardExampleCard = () => (
  <Card>
    <Image
      src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);
const CommentExampleComment = () => (
  <Comment.Group>
    <Header as="h3" dividing>
      Comments
    </Header>

    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content="Add Reply" labelPosition="left" icon="edit" primary />
    </Form>
  </Comment.Group>
);
const FeedExampleBasic = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label>
        <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image="/images/avatar/small/helen.jpg" />
      <Feed.Content>
        <Feed.Summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </a>
          <a>
            <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />1 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image="/images/avatar/small/jenny.jpg" />
      <Feed.Content>
        <Feed.Summary
          date="2 Days Ago"
          user="Jenny Hess"
          content="add you as a friend"
        />
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image="/images/avatar/small/joe.jpg" />
      <Feed.Content>
        <Feed.Summary>
          <a>Joe Henderson</a> posted on his page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Ours is a life of constant reruns. We're always circling back to where
          we'd we started, then starting all over again. Even if we don't run
          extra laps that day, we surely will come back for more of the same
          another day soon.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image="/images/avatar/small/justen.jpg" />
      <Feed.Content>
        <Feed.Summary>
          <a>Justen Kitsune</a> added <a>2 new photos</a> of you
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </a>
          <a>
            <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />
            41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);
const ItemExampleItems = () => (
  <Item.Group>
    <Item>
      <Item.Image
        size="tiny"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />

      <Item.Content>
        <Item.Header as="a">Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image
        size="tiny"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />

      <Item.Content>
        <Item.Header as="a">Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);
const StatisticExampleStatistic = () => (
  <Statistic>
    <Statistic.Value>5,550</Statistic.Value>
    <Statistic.Label>Downloads</Statistic.Label>
  </Statistic>
);
const CheckboxExampleCheckbox = () => (
  <Checkbox label="Make my profile visible" />
);
const DropdownExampleDropdown = () => (
  <Dropdown text="File">
    <Dropdown.Menu>
      <Dropdown.Item text="New" />
      <Dropdown.Item text="Open..." description="ctrl + o" />
      <Dropdown.Item text="Save as..." description="ctrl + s" />
      <Dropdown.Item text="Rename" description="ctrl + r" />
      <Dropdown.Item text="Make a copy" />
      <Dropdown.Item icon="folder" text="Move to folder" />
      <Dropdown.Item icon="trash" text="Move to trash" />
      <Dropdown.Divider />
      <Dropdown.Item text="Download As..." />
      <Dropdown.Item text="Publish To Web" />
      <Dropdown.Item text="E-mail Collaborators" />
    </Dropdown.Menu>
  </Dropdown>
);
const EmbedExampleYouTube = () => (
  <Embed
    id="O6Xo21L0ybE"
    placeholder="/images/image-16by9.png"
    source="youtube"
  />
);
const PopupExample = () => (
  <Popup content="Add users to your feed" trigger={<Button icon="add" />} />
);
const ProgressExampleStandard = () => <Progress percent={11} />;
const RatingExampleRating = () => <Rating />;
const panes = [
  { menuItem: "Tab 1", render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
];
const TabExampleBasic = () => <Tab panes={panes} />;
const PaginationExamplePagination = () => (
  <Pagination defaultActivePage={5} totalPages={10} />
);
const RadioExampleRadio = () => <Radio label="Make my profile visible" />;
const countryOptions = [
  { key: "af", value: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", text: "Aland Islands" },
  { key: "al", value: "al", text: "Albania" },
  { key: "dz", value: "dz", text: "Algeria" },
  { key: "as", value: "as", text: "American Samoa" },
  { key: "ad", value: "ad", text: "Andorra" },
  { key: "ao", value: "ao", text: "Angola" },
  { key: "ai", value: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", text: "Antigua" },
  { key: "ar", value: "ar", text: "Argentina" },
  { key: "am", value: "am", text: "Armenia" },
  { key: "aw", value: "aw", text: "Aruba" },
  { key: "au", value: "au", text: "Australia" },
  { key: "at", value: "at", text: "Austria" },
  { key: "az", value: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", text: "Barbados" },
  { key: "by", value: "by", text: "Belarus" },
  { key: "be", value: "be", text: "Belgium" },
  { key: "bz", value: "bz", text: "Belize" },
  { key: "bj", value: "bj", text: "Benin" },
];
const SelectExample = () => (
  <Select placeholder="Select your country" options={countryOptions} />
);
const TextAreaExampleTextArea = () => (
  <Form>
    <TextArea placeholder="Tell us more" />
  </Form>
);

const ComponentsPage = () => {
  return (
    <Layout>
      <Header as="h2">Components Page</Header>
      <p>
        Issue Tracker 프로젝트에 사용할 컴포넌트 렌더링을 테스트하는
        페이지입니다!!!
      </p>
      <div>
        <Header as="h3">Elements</Header>
        <ButtonExampleButton></ButtonExampleButton>
        <ContainerExampleContainer></ContainerExampleContainer>
        <DividerExampleDivider></DividerExampleDivider>
        <FlagExampleFlag></FlagExampleFlag>
        <HeaderExamplePage></HeaderExamplePage>
        <IconExampleDisabled></IconExampleDisabled>
        <ImageExampleImage></ImageExampleImage>
        <InputExampleInput></InputExampleInput>
        <LabelExampleBasic></LabelExampleBasic>
        <ListExampleBasic></ListExampleBasic>
        <LoaderExampleLoader></LoaderExampleLoader>
        <PlaceholderExamplePlaceholder></PlaceholderExamplePlaceholder>
        <RailExampleRail></RailExampleRail>
        <RevealExampleFade></RevealExampleFade>
        <SegmentExampleSegment></SegmentExampleSegment>
        <StepExampleStep></StepExampleStep>
      </div>
      <div>
        <Header as="h3">Collections</Header>
        <BreadcrumbExample></BreadcrumbExample>
        <FormExampleForm></FormExampleForm>
        <MessageExampleMessage></MessageExampleMessage>
        <TableExamplePagination></TableExamplePagination>
      </div>
      <div>
        <Header as="h3">Views</Header>
        <AdvertisementExampleAdvertisement></AdvertisementExampleAdvertisement>
        <CardExampleCard></CardExampleCard>
        <CommentExampleComment></CommentExampleComment>
        <FeedExampleBasic></FeedExampleBasic>
        <ItemExampleItems></ItemExampleItems>
        <StatisticExampleStatistic></StatisticExampleStatistic>
      </div>
      <div>
        <Header as="h3">Modules</Header>
        <CheckboxExampleCheckbox></CheckboxExampleCheckbox>
        <DropdownExampleDropdown></DropdownExampleDropdown>
        <EmbedExampleYouTube></EmbedExampleYouTube>
        <PopupExample></PopupExample>
        <ProgressExampleStandard></ProgressExampleStandard>
        <RatingExampleRating></RatingExampleRating>
        <TabExampleBasic></TabExampleBasic>
      </div>
      <div>
        <Header as="h3">Behaviors</Header>
      </div>
      <div>
        <Header as="h3">Addons</Header>
        <PaginationExamplePagination></PaginationExamplePagination>
        <RadioExampleRadio></RadioExampleRadio>
        <SelectExample></SelectExample>
        <TextAreaExampleTextArea></TextAreaExampleTextArea>
      </div>
    </Layout>
  );
};

export default ComponentsPage;
