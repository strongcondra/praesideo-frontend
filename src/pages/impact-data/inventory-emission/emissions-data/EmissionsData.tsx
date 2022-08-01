import CustomForm from "../../../../components/CustomForm/CustomForm";
import { useAuth } from "../../../../helpers/useAuth";
import { useEmissionsData } from "./useEmissionsData";

interface EmissionsDataProps {
  isImpactDataEditable: boolean;
  isDataDemoable?: boolean;
  year: number;
  updateCompletedInformation: () => void;
}

const EmissionsData = ({
  year,
  isImpactDataEditable,
  isDataDemoable,
  updateCompletedInformation,
}: EmissionsDataProps) => {
  const { isImpactPerformanceAvailable } = useAuth();
  const { activeConfig, onFormSubmit, formDefaultValues } =
    useEmissionsData(year);

  const handleSubmit = async (value: any) => {
    try {
      await onFormSubmit(value);
      await updateCompletedInformation();
    } catch (e) {}
  };

  return formDefaultValues ? (
    <CustomForm
      submitOnBlur
      config={activeConfig}
      isDataDemoable={isDataDemoable}
      isDataEditable={
        isImpactPerformanceAvailable ? isImpactDataEditable : false
      }
      data={formDefaultValues}
      onSubmit={handleSubmit}
    />
  ) : null;
};

export default EmissionsData;
