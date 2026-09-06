import { useEffect, useState } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

// --- Imports from exercises ---
import { helloAsync } from '@/components/Tuan2/01';
import { getNumberAfterDelay } from '@/components/Tuan2/02';
import { failingTask as failingTask03 } from '@/components/Tuan2/03';
import { getRandomNumber } from '@/components/Tuan2/04';
import { simulateTask as simulateTask05 } from '@/components/Tuan2/05';
import { runParallelTasks as runParallel06 } from '@/components/Tuan2/06';
import { runRaceTasks } from '@/components/Tuan2/07';
import { addFive, double, square } from '@/components/Tuan2/08';
import { readAndFilterEvenNumbers } from '@/components/Tuan2/09';
import { simulateTask as simulateTask10 } from '@/components/Tuan2/10';
import { helloAsync as helloAsync11 } from '@/components/Tuan2/11';
import { runTask as runTask12 } from '@/components/Tuan2/12';
import { runWithErrorHandling } from '@/components/Tuan2/13';
import { runMultiply } from '@/components/Tuan2/14';
import { runSequentialTasks } from '@/components/Tuan2/15';
import { runParallelTasks as runParallel16 } from '@/components/Tuan2/16';
import { runTasksInOrder } from '@/components/Tuan2/17';
import { fetchUser as fetchUser18 } from '@/components/Tuan2/18';
import { fetchUsers } from '@/components/Tuan2/19';
import { fetchUser as fetchUser20, withTimeout } from '@/components/Tuan2/20';
import { fetchTodoById as fetchTodo21 } from '@/components/Tuan2/21';
import { fetchMultipleTodos } from '@/components/Tuan2/22';
import { fetchIncompleteTodos } from '@/components/Tuan2/23';
import { postData } from '@/components/Tuan2/24';
import { downloadFile } from '@/components/Tuan2/25';
import { wait as waitFn } from '@/components/Tuan2/26';
import { fetchWithRetry } from '@/components/Tuan2/27';
import { batchProcess } from '@/components/Tuan2/28';
import { queueProcess } from '@/components/Tuan2/29';
import { fetchAllStatuses } from '@/components/Tuan2/30';

function capture(fn: () => Promise<void> | void): Promise<string[]> {
  return new Promise(async (resolve) => {
    const logs: string[] = [];
    const orig = console.log;
    console.log = (...args: any[]) => {
      logs.push(
        args
          .map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a)))
          .join(' ')
      );
    };
    try {
      await fn();
    } catch (e) {
      logs.push(`Error: ${(e as Error).message}`);
    } finally {
      console.log = orig;
    }
    resolve(logs);
  });
}

interface Exercise {
  id: number;
  title: string;
  run: () => Promise<string[]>;
}

const exerciseList: Exercise[] = [
  {
    id: 1, title: 'Promise Hello Async',
    run: () => capture(async () => { console.log(await helloAsync()); }),
  },
  {
    id: 2, title: 'Promise Return Number',
    run: () => capture(async () => { console.log(await getNumberAfterDelay()); }),
  },
  {
    id: 3, title: 'Promise Reject Error',
    run: () => capture(async () => {
      try { await failingTask03(); } catch (e) { console.log((e as Error).message); }
    }),
  },
  {
    id: 4, title: 'Then/Catch Random Number',
    run: () => capture(async () => {
      const val = await getRandomNumber();
      console.log(`Số ngẫu nhiên: ${val}`);
    }),
  },
  {
    id: 5, title: 'Simulate Task',
    run: () => capture(async () => { console.log(await simulateTask05(500)); }),
  },
  {
    id: 6, title: 'Promise.all Parallel',
    run: () => capture(async () => { await runParallel06(); }),
  },
  {
    id: 7, title: 'Promise.race',
    run: () => capture(async () => { await runRaceTasks(); }),
  },
  {
    id: 8, title: 'Promise Chain Math',
    run: () => capture(async () => {
      const r = await addFive(await double(await square(2)));
      console.log(`Kết quả cuối cùng: ${r}`);
    }),
  },
  {
    id: 9, title: 'Filter Even Numbers',
    run: () => capture(async () => {
      console.log(await readAndFilterEvenNumbers([1, 2, 3, 4, 5, 6]));
    }),
  },
  {
    id: 10, title: 'Promise Finally',
    run: () => capture(async () => {
      try { console.log(await simulateTask10(false)); }
      catch (e) { console.log((e as Error).message); }
      finally { console.log('Done'); }
    }),
  },
  {
    id: 11, title: 'Async/Await Hello',
    run: () => capture(async () => { await helloAsync11(); }),
  },
  {
    id: 12, title: 'Async Simulate Task',
    run: () => capture(async () => { await runTask12(); }),
  },
  {
    id: 13, title: 'Async Try/Catch',
    run: () => capture(async () => { await runWithErrorHandling(); }),
  },
  {
    id: 14, title: 'Multiply By Three',
    run: () => capture(async () => { await runMultiply(5); }),
  },
  {
    id: 15, title: 'Sequential Tasks',
    run: () => capture(async () => { await runSequentialTasks(); }),
  },
  {
    id: 16, title: 'Parallel Promise.all',
    run: () => capture(async () => { await runParallel16(); }),
  },
  {
    id: 17, title: 'For Await Of',
    run: () => capture(async () => { await runTasksInOrder(); }),
  },
  {
    id: 18, title: 'Fetch User (Simulated)',
    run: () => capture(async () => { console.log(await fetchUser18(1)); }),
  },
  {
    id: 19, title: 'Fetch Users By IDs',
    run: () => capture(async () => { console.log(await fetchUsers([1, 2, 3])); }),
  },
  {
    id: 20, title: 'Fetch With Timeout',
    run: () => capture(async () => {
      try {
        console.log(await withTimeout(fetchUser20(1, 3000), 2000));
      } catch (e) { console.log(`Lỗi: ${(e as Error).message}`); }
    }),
  },
  {
    id: 21, title: 'Fetch Todo By ID',
    run: () => capture(async () => { console.log(await fetchTodo21(1)); }),
  },
  {
    id: 22, title: 'Fetch Multiple Todos',
    run: () => capture(async () => { await fetchMultipleTodos([1, 2, 3]); }),
  },
  {
    id: 23, title: 'Filter Incomplete Todos',
    run: () => capture(async () => {
      const todos = await fetchIncompleteTodos();
      console.log(`Số todo chưa hoàn thành: ${todos.length}`);
    }),
  },
  {
    id: 24, title: 'POST Data',
    run: () => capture(async () => {
      console.log(await postData({ userId: 1, title: 'Học TypeScript Async', completed: false }));
    }),
  },
  {
    id: 25, title: 'Download File (Simulated)',
    run: () => capture(async () => { await downloadFile('bookstore-report.pdf'); }),
  },
  {
    id: 26, title: 'SetTimeout Wait',
    run: () => capture(async () => {
      console.log('Bắt đầu chờ...');
      await waitFn(5000);
      console.log('Đã chờ xong 5 giây');
    }),
  },
  {
    id: 27, title: 'Fetch With Retry',
    run: () => capture(async () => {
      console.log(await fetchWithRetry('https://jsonplaceholder.typicode.com/todos/1', 3));
    }),
  },
  {
    id: 28, title: 'Batch Process',
    run: () => capture(async () => { await batchProcess(); }),
  },
  {
    id: 29, title: 'Queue Process',
    run: () => capture(async () => { console.log(await queueProcess([1, 2, 3, 4, 5])); }),
  },
  {
    id: 30, title: 'Promise.allSettled',
    run: () => capture(async () => { await fetchAllStatuses([1, 2, 3]); }),
  },
];

export default function Tuan2Screen() {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();
  const [results, setResults] = useState<Record<number, string[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function runAll() {
      for (const ex of exerciseList) {
        if (cancelled) break;
        const output = await ex.run();
        if (!cancelled) {
          setResults((prev) => ({ ...prev, [ex.id]: output }));
        }
      }
      if (!cancelled) setLoading(false);
    }

    runAll();
    return () => { cancelled = true; };
  }, []);

  const contentPadding = Platform.select({
    android: {
      paddingTop: safeAreaInsets.top + Spacing.three,
      paddingBottom: safeAreaInsets.bottom + Spacing.three,
    },
    ios: { paddingBottom: Spacing.three },
    web: { paddingTop: Spacing.four, paddingBottom: Spacing.four },
  });

  return (
    <ScrollView
      style={[styles.scroll, { backgroundColor: theme.background }]}
      contentContainerStyle={[styles.container, contentPadding]}
    >
      {exerciseList.map((ex) => {
        const output = results[ex.id];
        return (
          <View key={ex.id} style={styles.item}>
            <ThemedText style={styles.title}>
              Bai {String(ex.id).padStart(2, '0')}: {ex.title}
            </ThemedText>
            {output ? (
              output.map((line, i) => (
                <ThemedText key={i} style={styles.output}>
                  {line}
                </ThemedText>
              ))
            ) : (
              <ThemedText themeColor="textSecondary" style={styles.output}>
                Đang chạy...
              </ThemedText>
            )}
          </View>
        );
      })}
      {loading && (
        <ThemedText themeColor="textSecondary" style={styles.footer}>
          Đang chạy các bài tập...
        </ThemedText>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  container: { padding: Spacing.three, gap: Spacing.four },
  item: { gap: 4 },
  title: { fontWeight: '700', fontSize: 16 },
  output: { fontSize: 14, paddingLeft: Spacing.two },
  footer: { textAlign: 'center', paddingVertical: Spacing.three },
});
