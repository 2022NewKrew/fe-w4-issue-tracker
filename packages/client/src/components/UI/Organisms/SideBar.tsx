import { Dropdown, Progress } from "@UI/Molecules";
import Atoms from "@UI/Atoms";
import Icon from "@UI/Icon";

import styled from "@emotion/styled";

import { useUserStore } from "@stores/user";
import { useMilestoneStore } from "@stores/milestone";
import { useLabelStore } from "@stores/label";
import { Milestone } from "@types";

interface Props {
  assignees: string[];
  setAssignees: (e: any) => void;
  labels: string[];
  setLabels: (e: any) => void;
  milestone: string | null;
  setMilestone: (e: any) => void;
}

const SideBar = ({
  assignees,
  setAssignees,
  labels,
  setLabels,
  milestone,
  setMilestone,
}: Props) => {
  const { userList } = useUserStore();
  const { labelList } = useLabelStore();
  const { milestoneList } = useMilestoneStore();

  return (
    <Wrapper className="SideBar">
      <div>
        <Dropdown
          select={assignees}
          onSelect={setAssignees}
          indicator="담장자"
          listTitle="담당자 추가"
          list={userList}
          direction="right"
        />
        <ul>
          {userList
            .filter(({ id }) => assignees.includes(id))
            .map(({ id, name }) => (
              <li key={id} className="athorlist">
                <Icon name="user_image_large" />
                {name}
              </li>
            ))}
        </ul>
      </div>
      <div>
        <Dropdown
          select={labels}
          onSelect={setLabels}
          indicator="레이블"
          listTitle="레이블 추가"
          list={labelList}
          direction="right"
        />
        <ul>
          {labelList
            .filter(({ id }) => labels.includes(id))
            .map(({ id, name, backgroundColor }) => (
              <Atoms.Label key={id} type="custom" color={backgroundColor}>
                {name}
              </Atoms.Label>
            ))}
        </ul>
      </div>
      <div>
        <Dropdown
          select={milestone}
          onSelect={setMilestone}
          indicator="마일스톤"
          listTitle="마일스톤 추가"
          list={milestoneList}
          direction="right"
        />
        {milestone && (
          <Progress
            title
            milestone={
              milestoneList.find(({ id }) => id === milestone) as Milestone
            }
          />
        )}
      </div>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.aside`
  width: 308px;
  & > div {
    border: 1px solid var(--line);
    min-height: 96px;
    padding: 32px;
    & > ul > * {
      margin-bottom: 16px;
    }
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
