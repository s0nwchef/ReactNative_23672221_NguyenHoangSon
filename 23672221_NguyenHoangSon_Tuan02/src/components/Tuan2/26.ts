function wait(ms: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

async function runFiveSecondWait(): Promise<void> {
  console.log("Bắt đầu chờ...");
  await wait(5000);
  console.log("Đã chờ xong 5 giây");
}

export { runFiveSecondWait, wait };
