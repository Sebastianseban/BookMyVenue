

export const toSafeUser = <T extends object>(user: T): Omit<T, 'passwordHash'> => {
  const { passwordHash, ...safeUser } = user as T & { passwordHash?: unknown };

  return safeUser as Omit<T, 'passwordHash'>;
};
