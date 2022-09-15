import { dataApi } from "../../services/DataServices";
import { IData } from "../../types/IData";

export const useGetSaerchRes = (limit: number, genr: string, valueInput: string): IData | undefined => {
    const {data} = dataApi.useGetSaerchResQuery({limit, genr, valueInput});
    return data
}