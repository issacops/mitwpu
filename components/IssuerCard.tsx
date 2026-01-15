import React from 'react';
import { IssuerInfo } from '../types';

interface IssuerCardProps {
  info: IssuerInfo;
}

const IssuerCard: React.FC<IssuerCardProps> = ({ info }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mt-6">
      <div className="bg-[#4466b0] px-4 py-3 border-b border-gray-100">
        <h2 className="font-semibold text-lg text-white">Issuer's Information</h2>
      </div>
      <div className="p-5 text-sm">
        <div className="mb-4">
          <h3 className="font-bold text-gray-800 mb-1">Wallet Address:</h3>
          <p className="text-gray-600 break-all font-mono text-xs">{info.walletAddress}</p>
        </div>
        
        <div className="mb-4">
          <h3 className="font-bold text-gray-800 mb-1">Polygon Transaction URL:</h3>
          <a 
            href={info.transactionUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            View Transaction
          </a>
        </div>

        <div className="mb-4">
          <h3 className="font-bold text-gray-800 mb-1">Smart Contract Address:</h3>
          <p className="text-gray-600 break-all font-mono text-xs">{info.smartContractAddress}</p>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-1">Transaction Hash:</h3>
          <p className="text-gray-600 break-all font-mono text-xs">{info.transactionHash}</p>
        </div>
      </div>
    </div>
  );
};

export default IssuerCard;