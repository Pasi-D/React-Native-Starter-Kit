/*****************************************************************************************
 * Accesses a variable inside of .env file and cache for later usage; throws an error if its not found.
 *
 * caching the values to improve the performance.
 *
 * Usage:
 *
 * import accessEnv from "helpers/accessEnv";
 *
 * const redirectionHost = accessEnv("MAJOR_VERSION", 1);
 ****************************************************************************************/
import Config from "react-native-config";

const cache: Record<string, string> = {};

const accessEnv = (key: string, defaultValue?: string | number): any => {
    // If the .env variable is not declared
    if (![key in Config]) {
        if (defaultValue) {
            return defaultValue;
        }
        throw new Error(`${key} not found in .env`);
    }

    // If returned as undefined
    if (Config[key] === undefined) {
        if (defaultValue) {
            return defaultValue;
        }
        throw new Error(`${key} not found in .env`);
    }

    if (cache[key]) {
        return cache[key];
    }

    cache[key] = Config[key];

    return Config[key];
};

export default accessEnv;
