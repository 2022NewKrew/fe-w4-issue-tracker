import { CustomButton, Dropdown, Progress } from "@UI/Molecules";
import Atoms from "@UI/Atoms";
import Icon from "@UI/Icon";

import styled from "@emotion/styled";

import { useUserStore } from "@stores/user";
import { useMilestoneStore } from "@stores/milestone";
import { useLabelStore } from "@stores/label";
import { Milestone } from "@types";
import { useIssueFormStore, useIssueMutation } from "@stores/issue";
import { useEffect } from "react";

const SideBar = () => {
  const { userList } = useUserStore();
  const { labelList } = useLabelStore();
  const { milestoneList } = useMilestoneStore();

  const { issueForm, setAssignees, setLabels, setMilestone, issueFormMode } =
    useIssueFormStore();

  const { removeIssue, modifyIssue } = useIssueMutation();
  const { assignees, labels, milestone } = issueForm;

  const Aside = Wrapper.withComponent("aside");

  useEffect(() => {
    return () => {
      modifyIssue();
    };
  }, []);

  return (
    <Aside className="SideBar">
      <Atoms.Li>
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
      </Atoms.Li>
      <Atoms.Li>
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
            .map(({ id, name, backgroundColor, textColor }) => (
              <Atoms.Label
                key={id}
                type="custom"
                color={textColor}
                bgColor={backgroundColor}
                text={name}
              />
            ))}
        </ul>
      </Atoms.Li>
      <Atoms.Li>
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
      </Atoms.Li>
      {issueFormMode !== "add" && (
        <CustomButton.RemoveButton onClick={() => removeIssue()} />
      )}
    </Aside>
  );
};

export default SideBar;

const Wrapper = styled(Atoms.Ul)`
  width: 308px;
  height: min-content;
  position: relative;
  & > li {
    min-height: 96px;
    padding: 20px 32px;
    flex-direction: column;
    & > .Dropdown > button {
      width: 244px;
      justify-content: space-between;
      margin-bottom: 2px;
      & > svg {
        position: static;
      }
      + .Panel {
        top: 48px;
      }
    }
    & > ul {
      width: 100%;
      & > * {
        margin-top: 16px;
      }
    }
    .athorlist {
      display: flex;
      align-items: center;
      & > svg {
        position: static;
        margin-right: 4px;
      }
    }
  }
  & > .RemoveButton {
    position: absolute;
    right: 0;
  }
`;
