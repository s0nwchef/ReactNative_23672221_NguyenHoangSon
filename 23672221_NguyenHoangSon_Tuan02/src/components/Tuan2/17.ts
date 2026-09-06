function simulateTask(time: number, label: string): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve(`${label} hoàn thành`), time);
  });
}

async function runTasksInOrder(): Promise<void> {
  const tasks: Promise<string>[] = [
    simulateTask(500, "Task A"),
    simulateTask(300, "Task B"),
    simulateTask(700, "Task C"),
  ];

  for await (const result of tasks) {
    console.log(result);
  }
}

export { runTasksInOrder, simulateTask };
