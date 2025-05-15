import { Outlet } from 'react-router-dom'
import Header from '../componets/shared/header'
import Footer from '../componets/shared/footer'

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className=" mx-auto ">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}

export default RootLayout
