import { useBearStore } from '@/store/bearStore'

export default function Bears() {
  const bears = useBearStore(state => state.bears)

  return <div>{bears}</div>
}
