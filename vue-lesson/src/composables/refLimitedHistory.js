import { watchEffect } from "vue";
import { refHistory } from "./refHistory"

export function refLimitedHistory(sourse, capacity) {
  const { history, undo } = refHistory(sourse);
  watchEffect(() => {
    if (history.value.length > capacity) {
      history.value.shift();
    }
  });

  return {
    history,
    undo,
  }
}
