import React, { useState, useEffect } from 'react';
import { Layout, Breadcrumb, Input, Button } from 'antd';
import JobCard from '../../components/UIElements/Form/Card';
import FooterPage from '../../components/Footer/Footer';
import { GetJobs } from '../../api/job'; // Adjust import path as needed

const { Content } = Layout;

const Vacancy = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await GetJobs();
        setJobData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter job data based on search keyword
  const filteredJobData = jobData.filter(job =>
    job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    job.description.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout className="min-h-screen">
      <Content className="p-4">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Vacancy</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-3xl font-bold mb-4 ml-24">Vacancy</h1>
        <div className="bg-white ml-24 mb-6 rounded-lg flex items-center" style={{ width: '50%' }}>
          <Input
            style={{ width: '80%' }}
            className="rounded-full"
            placeholder="Keyword"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <Button
            type="primary"
            className="bg-gray-500 rounded-full ml-2"
            onClick={() => {} /* Handle search button click if needed */}
          >
            Search Job
          </Button>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 ml-24 mr-24">{filteredJobData.length} Jobs Found</h2>
          <div className="ml-24 mr-24 grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredJobData.map((job, index) => (
              <JobCard 
                key={index}
                title={job.title} 
                description={job.description}
                experience={job.experience}
                deadline={job.deadline}
                location={job.location}
                jobType={job.jobType}
                qualifications={job.qualifications}
                keyResponsibilities={job.keyResponsibilities}
                languages={job.languages}
                startDate={job.startDate}
                email={job.email}
                phone={job.phone}
              />
            ))}
          </div>
        </div>
      </Content>
      <FooterPage/>
    </Layout>
  );
};

export default Vacancy;
