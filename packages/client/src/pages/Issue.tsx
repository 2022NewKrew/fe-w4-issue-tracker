import AppLayout from "@components/common/AppLayout";
import FilterBar from "@components/Issue/FilterBar";
import IssueTable from "@components/Issue/IssueTable";
import LinkTap from "@components/Issue/LinkTap";

const Issue = () => {
  return (
    <AppLayout>
      <LinkTap />
      <FilterBar />
      <IssueTable />
    </AppLayout>
  );
};

export default Issue;
