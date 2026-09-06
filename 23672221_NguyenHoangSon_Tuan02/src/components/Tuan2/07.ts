function simulateTask(time: number, label: string): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`${label} về đích trước`);
    }, time);
  });
}

async function runRaceTasks(): Promise<void> {
  const winner: string = await Promise.race([
    simulateTask(2000, "Task A"),
    simulateTask(800, "Task B"),
    simulateTask(1500, "Task C"),
  ]);
  console.log(winner);
}

export { runRaceTasks, simulateTask };
