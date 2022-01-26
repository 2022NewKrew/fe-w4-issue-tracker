import AppLayout from "@components/common/AppLayout";
import FilterBar from "@components/Issue/FilterBar";
import IssueListTable from "@components/Issue/IssueListTable";
import LinkTap from "@components/Issue/LinkTap";

const Issue = () => {
  return (
    <AppLayout>
      <LinkTap />
      <FilterBar />
      <IssueListTable />
    </AppLayout>
  );
};

export default Issue;
