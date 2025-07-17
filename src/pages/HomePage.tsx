import Bears from '@/components/Bears'
import BearCounter from '@/components/BearCounter'

export interface IHomePageProps {}

export function HomePage() {
  return (
    <div>
      <h1>Hello world!</h1>
      <div>
        상태관리 example
        <Bears />
        <BearCounter />
      </div>
    </div>
  )
}
