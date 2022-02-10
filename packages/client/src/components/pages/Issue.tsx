import AppLayout from "@templetes/AppLayout";
import { LinkTap, FilterBar, IssueTable } from "@UI/Organisms";

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
