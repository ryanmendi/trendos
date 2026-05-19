export function simulatePerformance(
  predictedScore: number
) {
  const views = Math.floor(
    predictedScore * (Math.random() * 100)
  );

  const clicks = Math.floor(
    views * (Math.random() * 0.3)
  );

  const sales = Math.floor(
    clicks * (Math.random() * 0.2)
  );

  const engagementRate = Number(
    ((clicks / views) * 100 || 0).toFixed(2)
  );

  return {
    views,
    clicks,
    sales,
    engagementRate,
  };
}