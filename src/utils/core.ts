import accessEnv from "helpers/accessEnv";

/**
 * Modifies or overrides original Type/Interface's properties.
 */
export type TypeModifier<T, R> = Omit<T, keyof R> & R;

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

/**
 * Returns version name of the app
 */
export const getAppVersionName = (): string => {
    let version = `v.${accessEnv("MAJOR_VERSION")}.${accessEnv(
        "MINOR_VERSION",
    )}.${accessEnv("PATCH_VERSION")}`;
    if (accessEnv("PRE_RELEASE", undefined) !== undefined) {
        version = version.concat(`-${accessEnv("PRE_RELEASE")}`);
    }
    return version;
};
