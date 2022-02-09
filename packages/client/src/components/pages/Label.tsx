import { useLabelFormStore } from "@stores/label";
import AppLayout from "@templetes/AppLayout";
import { CustomButton, Taps } from "@UI/Molecules";
import { LabelForm, LabelTable } from "@UI/Organisms";

const Label = () => {
  const { labelFormMode } = useLabelFormStore();

  return (
    <AppLayout>
      <Taps />
      <CustomButton.LabelAddButton />
      <LabelForm mode={labelFormMode} />
      <LabelTable />
    </AppLayout>
  );
};

export default Label;
