import AppLayout from "@templetes/AppLayout";
import { LinkTap, FilterBar, IssueListTable } from "@UI/Organisms";

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
