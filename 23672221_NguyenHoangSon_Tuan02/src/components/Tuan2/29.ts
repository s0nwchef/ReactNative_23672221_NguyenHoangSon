function simulateTask(id: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve(`Task ${id} hoàn thành`), 500);
  });
}

async function queueProcess(taskIds: number[]): Promise<string[]> {
  const results: string[] = [];
  for (const id of taskIds) {
    const result: string = await simulateTask(id);
    results.push(result);
  }
  return results;
}

export { queueProcess, simulateTask };
