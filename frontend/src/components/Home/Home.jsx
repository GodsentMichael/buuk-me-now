import React, { useState } from 'react'
import styles from '../../styles/styles'
import Pagination from '../Pagination'
import { server } from "../../server";
import axios from 'axios'

const Home = () => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const handleCreateCampaign = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${server}/campaign/create`,{
        title, description, targetGroup
      }, {withCredentials: true} )
      console.log("Campaign created successfully=>", response.data)
    } catch (error) {
      
    }
  }


  return (
    <>
    
    <section className={` ${styles.section} flex flex-col items-start mt-6 space-y-3`}>
      <h3 className="text-3xl font-bold">Customers</h3>
      <p className="text-lg">See all your customers in one place</p>
    </section>

    <section className={` ${styles.section} flex flex-col items-start mt-6 space-y-3`}>
       <div className="flex items-center">
        <h3 className="text-2xl font-thin mr-4">Customer Log</h3>
        <div className="relative">
          <h3 className="text-2xl mr-4">Campaigns</h3>
          <div className="  bottom-0 left-0.8 w-full h-1 bg-black"></div>
        </div>
      </div>
    </section>

    <section className={` ${styles.section} flex items-center justify-between  gap-8 py-4 px-2 bg-gray-100 rounded-md`}>
        <div className='w-2/3 space-x-2'>
        <input
          type="text"
          className="w-2/3 py-2 px-4 border border-white-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search customer log by customer name, email address & phone number"
        />
        <button className=" py-2 px-4 bg-[#FFFFFF] font-Roboto font-bold text-[#004741] rounded-md">Search</button>
        </div>
        <button className=" py-2 px-4 bg-[#004741] text-white font-Roboto flex items-center justify-center rounded-md" onClick={toggleModal}>
          <img src="/src/assets/campaign.png" alt="campaign icon" className='h-6 w-6 mr-2' /> 
          Create a campaign
        </button>
      </section>

        {/* The Create Campaign Modal */}
        {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-[500px] h-[600px]">
            <div className='flex'>
            <img src="/src/assets/campaign-black.png" alt="campaign icon" className='h-6 w-6 mr-2'  /> 
            <h2 className="text-xl font-semibold mb-4">Create a Campaign</h2>
            </div>
            <form className=' space-y-9' onSubmit={handleCreateCampaign}>
              <div className="mb-4">
                <h4 className="text-lg font-normal ">Campaign Title</h4>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-300" />
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-normal">Description</h4>
                <textarea className="w-full h-[150px] border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-300" />
              </div>
              
              <div className="mb-9">
                <h4 className="text-lg font-normal pb-2">Target Group</h4>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-300">
                  <option value="all">All Customers</option>
                  <option value="male">Male Customers</option>
                  <option value="female">Female Customers</option>
                </select>
              </div>
              
              <button type="submit" className="py-2 px-4 bg-[#004741] w-full text-white font-Roboto rounded-md">Submit your campaign</button>
            </form>
          </div>
        </div>
      )}

      <section className={` ${styles.section} flex flex-col items-start mt-6 space-y-3 overflow-hidden py-2 px-2`}>
        <table className="w-full table-auto border-collapse px-4 py-4 ">
          <thead className='bg-gray-100 border rounded-md'>
            <tr className="">
              <th className="text-start justify-start px-4 py-2">Campaign Title</th>
              <th className="text-start justify-start px-4 py-2">Description</th>
              <th className="text-start justify-start px-4 py-2">Target Group</th>
              <th className="text-start justify-start px-4 py-2">Campaign Status</th>
            </tr>
          </thead>
          <tbody className='bg-[#FFFFFF]'>
            <tr className='border'>
              <td className=" px-4 py-2">Mobile app coming soon</td>
              <td className=" px-4 py-2">Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...</td>
              <td className=" px-4 py-2">All customers</td>
              <td className=" px-4 py-2">Active</td>
            </tr>
            <tr className='border'>
              <td className=" px-4 py-2">Mobile app coming soon</td>
              <td className=" px-4 py-2">Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...</td>
              <td className=" px-4 py-2">All customers</td>
              <td className=" px-4 py-2">Active</td>
            </tr>
            <tr className='border'>
              <td className=" px-4 py-2">Mobile app coming soon</td>
              <td className=" px-4 py-2">Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...</td>
              <td className=" px-4 py-2">All customers</td>
              <td className=" px-4 py-2">Active</td>
            </tr>
            <tr className='border'>
              <td className=" px-4 py-2">Mobile app coming soon</td>
              <td className=" px-4 py-2">Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...</td>
              <td className=" px-4 py-2">All customers</td>
              <td className=" px-4 py-2">Inactive</td>
            </tr>
            <tr className='border'>
              <td className=" px-4 py-2">Mobile app coming soon</td>
              <td className=" px-4 py-2">Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...</td>
              <td className=" px-4 py-2">All customers</td>
              <td className=" px-4 py-2">Inactive</td>
            </tr>
            <tr className='border'>
              <td className=" px-4 py-2">Mobile app coming soon</td>
              <td className=" px-4 py-2">Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...</td>
              <td className=" px-4 py-2">All customers</td>
              <td className=" px-4 py-2">Inactive</td>
            </tr>
            <tr className='border'>
              <td className=" px-4 py-2">Mobile app coming soon</td>
              <td className=" px-4 py-2">Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...</td>
              <td className=" px-4 py-2">All customers</td>
              <td className=" px-4 py-2">Inactive</td>
            </tr>
            <tr className='border'>
              <td className=" px-4 py-2">Mobile app coming soon</td>
              <td className=" px-4 py-2">Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...</td>
              <td className=" px-4 py-2">All customers</td>
              <td className=" px-4 py-2">Active</td>
            </tr>
            <tr className='border'>
              <td className=" px-4 py-2">Mobile app coming soon</td>
              <td className=" px-4 py-2">Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...</td>
              <td className=" px-4 py-2">All customers</td>
              <td className=" px-4 py-2">Active</td>
            </tr>
            <tr className='border'>
              <td className=" px-4 py-2">Mobile app coming soon</td>
              <td className=" px-4 py-2">Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...</td>
              <td className=" px-4 py-2">All customers</td>
              <td className=" px-4 py-2">Inactive</td>
            </tr>
            <tr className='border'>
              <td className=" px-4 py-2">Mobile app coming soon</td>
              <td className=" px-4 py-2">Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...</td>
              <td className=" px-4 py-2">All customers</td>
              <td className=" px-4 py-2">Inactive</td>
            </tr>
        
          </tbody>
        </table>

      </section>

         {/* Pagination */}
         <section className={`${styles.section} flex justify-end items-end pt-4`}>
          <Pagination />
         </section>
  
    </>
  )
}

export default Home