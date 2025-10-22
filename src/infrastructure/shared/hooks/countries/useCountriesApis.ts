import { AppFetchApi } from "../../../../api/fetch/AppFetchApi"
import { EnvVariables } from "../../../../core/utils/EnvVariable";

export const useCountriesApis = () => {
    const { get } = AppFetchApi();

    const getCountries = async (): Promise<TCountry[]> => {
        return await get(EnvVariables.CountriesApiUrl, EnvVariables.EndPoints.Countries.GetAll + `?fields=name`);
    }

    return { getCountries };
}