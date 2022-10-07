import { DaysProvider } from "./WorkingDay/context/DaysProvider"
import { WorkingPage } from "./WorkingDay/page/WorkingPage"

export const WorkingDayApp = () => {
  return (
    <DaysProvider>
      <WorkingPage />
    </DaysProvider>
  )
}
