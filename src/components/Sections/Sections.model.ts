import {
  ConditionFormConfig,
  CustomFormConfig,
  Field,
} from "../CustomForm/CustomForm.model";

export interface SectionsProps {
  formConfigConditionBy?: ConditionFormConfig;
  formConfig?: CustomFormConfig;
  onSubmit?: (values: any) => void;
  isDataDemoable?: boolean;
  isDataEditable?: boolean;
  onBlur?: (values: any) => void;
  data?: any[];
  label?: string | Field[];
  remove?: boolean;
  emptyMessage?: string;
  onRemove?: (id: number) => void;
  onChange: (...event: any[]) => void;
  addButtonLabel?: string;
}
