export function withDelay<T>(
  importFunc: () => Promise<{ default: React.ComponentType<T> }>,
  delay = 3000
): Promise<{ default: React.ComponentType<T> }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      importFunc().then(resolve);
    }, delay);
  });
}
