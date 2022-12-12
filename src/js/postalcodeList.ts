export interface PostalCodeList {
    [postcode: string]: string;
}

const sessionStorageKey = "postalcodes2023";

export async function fetchPostalCodeList(): Promise<PostalCodeList> {
    const response = await fetch("/data/postalcodes.json");
    return (await response.json()) as PostalCodeList;
}

/**
 * Loads the postal code list from the session storage cache
 * If the cache is empty, the the data json URL will be used
 */
export async function retrievePostalCodeList(): Promise<PostalCodeList> {
    // check if session storage has cached version of the list
    const sessionStorageData = sessionStorage.getItem(sessionStorageKey);
    if (sessionStorageData !== null) {
        return JSON.parse(sessionStorageData) as PostalCodeList;
    }

    // data is not cached, fetch and cache data
    const fetchedData = await fetchPostalCodeList();
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(fetchedData));
    return fetchedData;
}

/**
 * Searches the postcode database for the corresponding municipality
 * @param code
 */
export async function searchPostcode(
    code: number | string
): Promise<string | null> {
    const searchKey = code.toString();
    const postalcodesList = await retrievePostalCodeList();

    if (postalcodesList[searchKey]) {
        return postalcodesList[searchKey];
    }

    // search failed
    return null;
}
