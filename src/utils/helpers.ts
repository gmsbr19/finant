export function getTransactionVariant(t: any) {
  if (t.type === 'INCOME') return 'income';
  
  const mainCategoryName = t.category?.parent?.name || t.category?.name || '';

  if (mainCategoryName.includes('[S]')) return 'survival';
  if (mainCategoryName.includes('[L]')) return 'eudaimonia';
  if (mainCategoryName.includes('[R]')) return 'resilience';
  
  return 'transfer';
}