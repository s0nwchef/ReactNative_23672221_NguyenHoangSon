function downloadFile(fileName: string): Promise<void> {
  return new Promise<void>((resolve) => {
    console.log(`Bắt đầu tải file: ${fileName}`);
    setTimeout(() => {
      console.log(`Tải xong file: ${fileName}`);
      resolve();
    }, 3000);
  });
}

export { downloadFile };
