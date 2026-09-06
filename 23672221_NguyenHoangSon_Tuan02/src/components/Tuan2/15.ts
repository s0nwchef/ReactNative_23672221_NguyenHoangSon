function simulateTask(time: number, label: string): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve(`${label} hoàn thành`), time);
  });
}

async function runSequentialTasks(): Promise<void> {
  const resultA: string = await simulateTask(500, "Task A");
  console.log(resultA);

  const resultB: string = await simulateTask(500, "Task B");
  console.log(resultB);

  const resultC: string = await simulateTask(500, "Task C");
  console.log(resultC);
}

export { runSequentialTasks, simulateTask };
