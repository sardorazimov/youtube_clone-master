interface DashboardLayoutProps{
    children: React.ReactNode
}

const DashboardLayout = ({children}:DashboardLayoutProps) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default DashboardLayout


