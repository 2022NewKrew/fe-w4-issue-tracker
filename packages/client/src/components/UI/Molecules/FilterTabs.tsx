import { Dropdown } from "@UI/Molecules";
import styled from "@emotion/styled";
import { useGetLabels } from "@querys/labels";
import { useGetMilestones } from "@querys/milestone";
import { useGetUsers } from "@querys/user";
import { useRecoilState } from "recoil";
import { TableFilter, issueTableFilterState } from "@recoils/issueTable";

const FilterTabs = () => {
  const { data: labels } = useGetLabels();
  const { data: milestones } = useGetMilestones();
  const { data: users } = useGetUsers();

  const [select, setSelect] = useRecoilState(issueTableFilterState);

  const onSelect = (
    { target }: React.MouseEvent<HTMLElement>,
    type: TableFilter
  ) => {
    const li = (target as HTMLElement).closest("li");
    if (!li || !li.dataset.id) return;
    const selectedValue = li.dataset.id;
    setSelect((prev) => ({
      ...prev,
      [type]: prev[type] === selectedValue ? null : selectedValue,
    }));
  };

  return (
    <Wrapper>
      <Dropdown
        select={select.assignees}
        onSelect={(e) => onSelect(e, "assignees")}
        indicator="담당자"
        list={users}
      />
      <Dropdown
        select={select.label}
        onSelect={(e) => onSelect(e, "label")}
        indicator="레이블"
        list={labels}
      />
      <Dropdown
        select={select.milestone}
        onSelect={(e) => onSelect(e, "milestone")}
        indicator="마일스톤"
        list={milestones}
      />
      <Dropdown
        select={select.author}
        onSelect={(e) => onSelect(e, "author")}
        indicator="작성자"
        list={users}
      />
    </Wrapper>
  );
};

export default FilterTabs;

const Wrapper = styled.div`
  display: flex;
  & > .Dropdown {
    margin-left: 32px;
  }
`;
