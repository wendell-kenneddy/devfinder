export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('pt-br', {
    month: '2-digit',
    year: 'numeric',
    day: '2-digit'
  });
}
