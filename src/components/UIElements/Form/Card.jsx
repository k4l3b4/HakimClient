// JobCard.js
import React from 'react';
import { Card } from 'antd';

const JobCard = ({
  title,
  description,
  experience,
  deadline,
  location,
  jobType,
  qualifications,
  keyResponsibilities,
  keySkills,
  languages,
  startDate,
  email,
  phone
}) => (
  <Card className="job-card shadow-lg p-6">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-gray-600 mb-4"><strong className="text-gray-700">Description:</strong> {description}</p>
    <div className="mb-4">
      <strong className="text-gray-700">Experience:</strong> {experience}
    </div>
    <div className="mb-4">
      <strong className="text-gray-700">Deadline:</strong> {deadline}
    </div>
    <div className="mb-4">
      <strong className="text-gray-700">Location:</strong> {location}
    </div>
    <div className="mb-4">
      <strong className="text-gray-700">Job Type:</strong> {jobType}
    </div>
    <div className="mb-4">
      <strong className="text-gray-700">Qualifications:</strong> {qualifications}
    </div>
    <div className="mb-4">
      <strong className="text-gray-700">Key Responsibilities:</strong> {keyResponsibilities}
    </div>
    <div className="mb-4">
      <strong className="text-gray-700">Key Skills:</strong> {keySkills}
    </div>
    <div className="mb-4">
      <strong className="text-gray-700">Languages:</strong> {languages}
    </div>
    <div className="mb-4">
      <strong className="text-gray-700">Start Date:</strong> {startDate}
    </div>
    <div className="mb-4">
      <strong className="text-gray-700">Email:</strong> <a href={`mailto:${email}`} className="text-blue-500">{email}</a>
    </div>
    <div className="mb-4">
      <strong className="text-gray-700">Telephone:</strong> {phone}
    </div>
  </Card>
);

export default JobCard;
