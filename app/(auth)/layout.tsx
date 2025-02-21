
interface AuthLayoutProps {
    children: React.ReactNode;
}


const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div className="min-h-screen justify-center items-center flex">
        {children}
    </div>
  )
}

export default AuthLayout