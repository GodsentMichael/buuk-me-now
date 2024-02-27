import React from 'react'
import styles from '../../styles/styles'

const Home = () => {
  return (
    <>
    
    <section className={` ${styles.section} flex flex-col items-start mt-6 space-y-3`}>
      <h3 className="text-3xl font-bold">Customers</h3>
      <p className="text-lg">See all your customers in one place</p>
    </section>

    <section className={` ${styles.section} flex flex-col items-start mt-6 space-y-3`}>
       <div className="flex items-center">
        <h3 className="text-2xl font-thin mr-4">Customer Log</h3>
        {/* <h3 className="text-2xl mr-4 underline">Campaigns</h3>  */}
        <div className="relative">
          <h3 className="text-2xl mr-4">Campaigns</h3>
          <div className="  bottom-0 left-0.8 w-full h-1 bg-black"></div>
        </div>
      </div>
    </section>
  
    </>
  )
}

export default Home