import AppLayout from "@components/Layout/AppLayout";
import LinkTap from "@components/Issue/LinkTap";
import FilterBar from "@components/Issue/FilterBar";
import IssueListTable from "@components/Issue/IssueListTable";

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
