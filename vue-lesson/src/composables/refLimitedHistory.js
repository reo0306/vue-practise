import { watchEffect, toValue } from "vue";
import { useRefHistory } from "./refHistory"

export function useRefLimitedHistory(sourse, capacity) {
  const { history, undo } = useRefHistory(sourse);
  watchEffect(() => {
    if (history.value.length > toValue(capacity)) {
      history.value.shift();
    }
  });

  return {
    history,
    undo,
  }
}
