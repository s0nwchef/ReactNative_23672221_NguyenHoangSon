function simulateTask(id: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve(`Task ${id} hoàn thành`), 500 + id * 100);
  });
}

async function batchProcess(): Promise<void> {
  const tasks: Promise<string>[] = [1, 2, 3, 4, 5].map((id: number) => simulateTask(id));
  const results: string[] = await Promise.all(tasks);
  console.log(results);
}

export { batchProcess, simulateTask };
