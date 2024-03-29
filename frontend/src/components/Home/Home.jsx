import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import Pagination from "../Pagination";
import { server } from "../../server";
import axios from "axios";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    targetGroup: "all",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    // console.log("Searching for:", searchQuery);
    const filteredCampaigns = campaigns.filter(campaign =>
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCampaigns(filteredCampaigns);
  };
  

  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${server}/campaign/create`, formData);
      // console.log("Campaign created successfully=>", response.data);
      setFormData({
        title: "",
        description: "",
        targetGroup: "all",
      });
    } catch (error) {
      console.error("Error creating campaign=>", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCampaigns = async () => {
    try {
      const response = await axios.get(`${server}/campaign/get`, {
        params: {
          search: searchQuery,
          page: currentPage,
        },
      });
      // console.log("All Campaigns=>", response.data);
      setCampaigns(response.data.campaigns);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching campaigns=>", error);
    }
  };

  const fetchPaginatedCampaigns = async () => {
    try {
      const response = await axios.get(`${server}/campaign/get-paginated`, {
        params: {
          search: searchQuery,
          page: currentPage,
        },
      });
      // console.log("Paginated Campaigns=>", response.data);
      setCampaigns(response.data.campaigns);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching paginated campaigns=>", error);
    }
  };
  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  useEffect(() =>{
    fetchPaginatedCampaigns();
  }, [searchQuery, currentPage])

  useEffect(() => {
    fetchCampaigns();
  }, [searchQuery, currentPage]);

  return (
    <>
      <section
        className={` ${styles.section} flex flex-col items-start mt-6 space-y-3`}
      >
        <h3 className="md:text-3xl font-bold">Customers</h3>
        <p className="md:text-lg">See all your customers in one place</p>
      </section>

      <section
        className={` ${styles.section} flex flex-col items-start mt-6 space-y-3`}
      >
        <div className="flex items-center">
          <h3 className="md:text-2xl font-thin mr-4">Customer Log</h3>
          <div className="relative">
            <h3 className="md:text-2xl mr-4">Campaigns</h3>
            <div className="  bottom-0 left-0.8 w-full h-1 bg-black"></div>
          </div>
        </div>
      </section>

<section className={` ${styles.section} flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 py-4 px-2 bg-gray-100 rounded-md`}>
  <div className="md:w-2/3 flex md:flex-row  md:space-y-0 md:space-x-2">
    <input
      type="text"
      className="w-full md:w-2/3 py-1 px-4 border border-white-300 rounded-md focus:outline-none focus:border-green-500"
      placeholder="Search campaigns by campaign title..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={handleKeyDown}
    />
    <button
      className="py-1 px-4 bg-[#FFFFFF] font-Roboto font-bold text-[#004741] rounded-md md:w-auto"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>
  <button
    className="py-2 px-4 bg-[#004741] text-white font-Roboto flex items-center justify-center rounded-md md:w-auto mt-4 md:mt-0"
    onClick={toggleModal}
  >
    <img
      src="https://res.cloudinary.com/dye76dtzn/image/upload/v1709289428/campaign_r4epja.png"
      alt="campaign icon"
      className="h-6 w-6 mr-2"
    />
    Create a campaign
  </button>
</section>


      {/* The Create Campaign Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-[500px] h-[600px] relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={toggleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex">
              <img
                src="https://res.cloudinary.com/dye76dtzn/image/upload/v1709289427/campaign-black_tsvfve.png"
                alt="campaign icon"
                className="h-6 w-6 mr-2"
              />
              <h2 className="text-xl font-semibold mb-4">Create a Campaign</h2>
            </div>
            <form className="space-y-9" onSubmit={handleCreateCampaign}>
              <div className="mb-4">
                <h4 className="text-lg font-normal">Campaign Title</h4>
                <input
                  type="text"
                  name="title"
                  placeholder="Write your campaign title here"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-300"
                />
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-normal">Description</h4>
                <textarea
                  name="description"
                  placeholder="Write your message here"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full h-[150px] border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-300"
                />
              </div>

              <div className="mb-9">
                <h4 className="text-lg font-normal pb-2">Target Group</h4>
                <select
                  name="targetGroup"
                  placeholder="Select your target group"
                  value={formData.targetGroup}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-300"
                >
                  <option value="Target group">Select your target group</option>
                  <option value="All Customers">All Customers</option>
                  <option value="Male Customers">Male Customers</option>
                  <option value="Female Customers">Female Customers</option>
                </select>
              </div>

              <button
                type="submit"
                className="py-2 px-4 bg-[#004741] w-full text-white font-Roboto rounded-md"
                disabled={loading}
              >
                {loading ? "Creating..." : "Submit your campaign"}
              </button>
            </form>
          </div>
        </div>
      )}

<section className={` ${styles.section} flex flex-col items-start mt-6 space-y-3 overflow-hidden py-2 pr-4 pl-3 px-2 sm:`}>
  <div className="overflow-x-auto w-full">
    <table className="w-full table-auto border-collapse px-4 py-4 ">
      <thead className="bg-gray-100 border rounded-md">
        <tr className="">
          <th className="text-start justify-start px-4 py-2">Campaign Title</th>
          <th className="text-start justify-start px-4 py-2">Description</th>
          <th className="text-start justify-start px-4 py-2">Target Group</th>
          <th className="text-start justify-start px-4 py-2">Campaign Status</th>
        </tr>
      </thead>
      <tbody className="bg-[#FFFFFF]">
        {campaigns.map((campaign) => (
          <tr key={campaign._id} className="border">
            <td className="px-4 py-2">{campaign.title}</td>
            <td className="px-4 py-2">{campaign.description}</td>
            <td className="px-4 py-2">{campaign.targetGroup}</td>
            <td className="px-4 py-2">{campaign.campaignStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>



   {/* Pagination */}
   <section className={`${styles.section} flex justify-end items-end pt-4 pb-6`}>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </section>
    </>
  );
};

export default Home;
