import React from 'react';
import Header from './components/Header';
import InfoCard from './components/InfoCard';
import IssuerCard from './components/IssuerCard';
import DocumentPreview from './components/DocumentPreview';
import { VerificationDetail, IssuerInfo } from './types';

const App: React.FC = () => {
  // Data replicated from the screenshot
  const verificationData: VerificationDetail[] = [
    { label: 'Document Type', value: 'Educational Document' },
    { label: 'Description', value: 'Student ID : 1202210084' },
    { label: 'Student Name', value: 'Issac Padinjarepallipurathu Jacob' },
    { label: 'Competency Level', value: 'Bachelor of Commerce' },
    { label: 'Specialization', value: 'Finance' },
    { label: 'CGPA', value: '7.87' },
    { label: 'Completion date', value: '2024' },
  ];

  const issuerData: IssuerInfo = {
    walletAddress: '0xc3674e879b74312d06a1e024b29f1ab28469a68a',
    transactionUrl: 'https://polygonscan.com', // Placeholder link
    smartContractAddress: '0x301C3823886714E2dEfB66e585364CF9c62bEB21',
    transactionHash: '0xf9d672be383419af5d3d5cc9bce69608c26dc1b9fc21d68ef6c27bfd957b39b8',
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pb-10">
      <Header />
      
      <main className="container mx-auto px-4 py-6 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column - Details */}
          <div className="lg:col-span-5 flex flex-col">
            <InfoCard 
              title="Proof Verification" 
              data={verificationData} 
              type="success" 
            />
            <IssuerCard info={issuerData} />
          </div>

          {/* Right Column - Document Viewer */}
          <div className="lg:col-span-7 h-full">
            <DocumentPreview />
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;