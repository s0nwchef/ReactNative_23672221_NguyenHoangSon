function simulateTask(time: number, label: string): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`${label} hoàn thành`);
    }, time);
  });
}

async function runParallelTasks(): Promise<void> {
  const results: string[] = await Promise.all([
    simulateTask(1000, "Task A"),
    simulateTask(2000, "Task B"),
    simulateTask(1500, "Task C"),
  ]);
  console.log(results);
}

export { runParallelTasks, simulateTask };
