export function managerEntries(entry: string[] = []) {
  return [...entry, new URL('../manager.js', import.meta.url).pathname];
}
