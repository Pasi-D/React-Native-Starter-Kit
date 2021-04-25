/**
 * Modifies or overrides original Type/Interface's properties.
 */
export type TypeModifier<T, R> = Omit<T, keyof R> & R;
