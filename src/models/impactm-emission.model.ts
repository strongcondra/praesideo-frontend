export interface ImpactmEmissionModel {
  id?: number;
  companyId: number;
  isFinancialYear: boolean;
  yearRepresentationId: number;
  startMonth: number;
  isMeasurement: boolean;
  isStationaryCombustion: boolean;
  isMobileCombustion: boolean;
  isRefrigerators: boolean;
  isFireExtinguisher: boolean;
  dataImpactmScope1FuelCombustion?: StationaryFuelModel[];
  dataImpactmScope1MobileFuelCombustion?: MobileFuelModel[];
  dataImpactmScope1Distance?: DistanceModel[];
  dataImpactmScope1Refrigerators?: RefrigeratorsModel[];
  dataImpactmScope1Extinguishers?: ExtinguishersModel[];
  dataImpactmScope2Electricity?: ElectricityModel[];
}

export interface StationaryFuelModel {
  id: number;
  dataEmissionId: number;
  fuelTypeId: number;
  fuelAmountRaw: number;
  fuelUnitId: number;
  emissionFactorId: number;
  emissionFactorByUser: number;
  calcEmissionTypeId: number;
  calcFuelAmountConverted: number;
  calcTco2: number;
  emissionFactorsList: EmissionFactor[];
}

export interface MobileFuelModel {
  id: number;
  dataEmissionId: number;
  fuelTypeId: number;
  fuelAmountRaw: number;
  fuelUnitId: number;
  emissionFactorId: number;
  emissionFactorByUser: number;
  calcEmissionTypeId: number;
  calcFuelAmountConverted: number;
  calcTco2: number;
  emissionFactorsList: EmissionFactor[];
}

export interface DistanceModel {
  id: number;
  dataEmissionId: number;
  vehicleCategoryId: number;
  vehicleTypeId: number;
  distanceAmountRaw: number;
  distanceUnitId: number;
  emissionFactorId: number;
  emissionFactorByUser: number;
  calcConfigEmissionsTypeId: number;
  calcConfigEmissionsUnitFactorId: number;
  calcDistanceAmountConverted: number;
  calcTco2: number;
  emissionFactorsList: EmissionFactor[];
}


export interface RefrigeratorsModel {
  id: number;
  dataEmissionId: number;
  applianceTypeId: number;
  referigerantTypeId: number;
  annualTopupQuantity: number;
  topupUnitId: number;
  identificationNumber: number;
  capacity: number;
  emissionFactorId: number;
  emissionFactorByUser: number;
  calcConfigEmissionsTypeId: number;
  calcConfigEmissionsUnitFactorId: number;
  calcAnnualTopupQuantityConverted: number;
  calcTco2: number;
  emissionFactorsList: EmissionFactor[];
}

export interface ExtinguishersModel {
  id: number;
  dataEmissionId: number;
  applianceTypeId: number;
  annualTopupQuantity: number;
  topupUnitId: number;
  identificationNumber: number;
  emissionFactorId: number;
  emissionFactorByUser: number;
  calcConfigEmissionsTypeId: number;
  calcConfigEmissionsUnitFactorId: number;
  calcAnnualTopupQuantityConverted: number;
  calcTco2: number;
  emissionFactorsList: EmissionFactor[];
}

export interface ElectricityModel {
  id?: number;
  dataEmissionId: number;
  facilityId: number;
  totalElectricityAmountRaw: number;
  totalElectricityUnitId: number;
  totalRenewableAmountRaw: number;
  totalRenewableUnitId: number;
  emissionFactorId?: number;
  emissionFactorByUser?: number;
  calcConfigEmissionsTypeId?: number;
  calcConfigEmissionsUnitFactorId?: number;
  calcTotalElectricityAmountConverted?: number;
  calcTco2?: number;
  emissionFactorsList?: EmissionFactor[];
}

export interface EmissionFactor {
  listId:  number;
  listKey: string;
  listValue: string;
  listValue2: string;
}
