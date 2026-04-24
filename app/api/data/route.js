export async function GET() {
  const data = [
    { id: 1, title: "Smart Budgeting", desc: "Plan and track expenses easily." },
    { id: 2, title: "Visual Insights", desc: "Understand spending with charts." },
  ];
  return Response.json(data);
}
