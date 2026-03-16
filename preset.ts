export function managerEntries(entry = []) {
  return [...entry, new URL('./dist/register.js', import.meta.url).pathname];
}
