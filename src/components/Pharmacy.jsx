import React from 'react';
import { Link } from 'react-router-dom';
import { FaAmbulance, FaBriefcaseMedical, FaClinicMedical, FaFileMedical, FaHospital, FaMedkit, FaPills, FaUserMd } from 'react-icons/fa';
import Footer from './Footer';

const Pharmacy = () => {
  const businessTypes = [
    { icon: <FaHospital />, title: 'Hospital' },
    { icon: <FaClinicMedical />, title: 'Clinic' },
    { icon: <FaUserMd />, title: 'Doctor' },
    { icon: <FaMedkit />, title: 'Medical Store' },
    { icon: <FaPills />, title: 'Pharmacy' },
    { icon: <FaAmbulance />, title: 'Ambulance' },
    { icon: <FaBriefcaseMedical />, title: 'Medical Equipment' },
    { icon: <FaFileMedical />, title: 'Medical Insurance' },
  ];

  return (
    <div>
      {/* Component content will go here */}
      <Footer />
    </div>
  );
};

export default Pharmacy;