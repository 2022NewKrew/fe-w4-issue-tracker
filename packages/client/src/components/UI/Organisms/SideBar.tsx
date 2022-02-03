import { Dropdown, Progress } from "@UI/Molecules";
import Atoms from "@UI/Atoms";
import Icon from "@UI/Icon";

import styled from "@emotion/styled";

const athorList = ["Oni", "Daniel"];

const SideBar = () => {
  return (
    <Wrapper className="SideBar">
      <div>
        <Dropdown
          indicator="담장자"
          listTitle="담당자 추가"
          list={athorList}
          direction="right"
        />
        <li className="athorlist">
          <Icon name="user_image_large" />
          Oni
        </li>
      </div>
      <div>
        <Dropdown
          indicator="레이블"
          listTitle="레이블 추가"
          list={athorList}
          direction="right"
        />
        <Atoms.Label type="custom" color="#0025E7">
          document
        </Atoms.Label>
      </div>
      <div>
        <Dropdown
          indicator="마일스톤"
          listTitle="마일스톤 추가"
          list={athorList}
          direction="right"
        />
        <Progress />
      </div>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.aside`
  width: 308px;
  position: absolute;
  & > div {
    border: 1px solid var(--line);
    min-height: 96px;
    padding: 32px;
    & > .Dropdown > .Button {
      width: 244px;
      height: 32px;
      justify-content: space-between;
      margin-bottom: 18px;
      + .Panel {
        top: 38px;
      }
    }
    .athorlist {
      height: 44px;
      display: flex;
      align-items: center;
      padding-left: 48px;
      position: relative;
      & > svg {
        left: 0;
        top: 0;
      }
    }
    :first-of-type {
      border-radius: 16px 16px 0 0;
    }
    :last-of-type {
      border-radius: 0 0 16px 16px;
    }
  }
`;
