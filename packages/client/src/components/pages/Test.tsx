import Atoms from "@UI/Atoms";
import styled from "@emotion/styled";
import { useInput } from "@hooks";
import {
  ColorCode,
  Comment,
  Dropdown,
  OptionSelection,
  Progress,
  Taps,
  TextArea,
  TextInput,
} from "@UI/Molecules";
import { FilterBar } from "@UI/Organisms";
import Label from "@UI/Atoms/Label";

const Test = () => {
  const [text, onChange] = useInput("");
  return (
    <Wrapper>
      <Atoms.Button size="large">버튼</Atoms.Button>
      <Atoms.Button size="medium">버튼</Atoms.Button>
      <Atoms.Button size="small" icon="plus_white">
        BUTTON
      </Atoms.Button>
      <Atoms.Button size="small" shape="secondary" icon="plus">
        BUTTON
      </Atoms.Button>
      <Atoms.Button size="medium" shape="text" icon="plus">
        BUTTON
      </Atoms.Button>
      <Atoms.Button size="small" shape="text" icon="plus">
        BUTTON
      </Atoms.Button>
      <TextInput size="large" label="아이디" value={text} onChange={onChange} />
      <TextInput
        size="medium"
        label="아이디"
        value={text}
        onChange={onChange}
      />
      <TextInput size="small" label="아이디" value={text} onChange={onChange} />
      <TextArea value={text} onChange={onChange} width={340} height={200} />
      <ColorCode label="Label" />
      <Dropdown
        indicator="Filter"
        listTitle="필터이름"
        list={["1", "2"]}
        direction="left"
      />
      <Taps />
      <FilterBar />
      <Label type="open" />
      <Label type="close" />
      <Label type="dark">레이블 이름</Label>
      <Label type="light">레이블 이름</Label>
      <Label type="athor" />
      <Comment width={480} text="코멘트는 이렇게 보여집니다." />
      <Comment width={480} state="close" text="이슈가 닫혔습니다." />
      <Comment width={480} state="reopen" text="이슈가 다시 열렸습니다." />
      <OptionSelection label="Label" options={["Option1", "Option2"]} />
      <Progress />
      <Progress text />
    </Wrapper>
  );
};

export default Test;

const Wrapper = styled.div`
  width: 340px;
  & > * {
    margin-left: 30px;
    margin-bottom: 10px;
  }
`;
