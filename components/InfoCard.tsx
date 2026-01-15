import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { VerificationDetail } from '../types';

interface InfoCardProps {
  title: string;
  data: VerificationDetail[];
  type: 'success' | 'info';
}

const InfoCard: React.FC<InfoCardProps> = ({ title, data, type }) => {
  const isSuccess = type === 'success';

  const headerBg = isSuccess ? 'bg-green-100' : 'bg-blue-100';
  const headerText = isSuccess ? 'text-green-600' : 'text-blue-800';
  const iconColor = isSuccess ? 'text-green-500' : 'text-blue-600';

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full">
      <div className={`${headerBg} px-4 py-3 flex items-center gap-2 border-b border-gray-100`}>
        <CheckCircle2 className={`w-6 h-6 ${iconColor}`} />
        <h2 className={`font-semibold text-lg ${headerText}`}>{title}</h2>
      </div>
      <div className="p-5">
        <ul className="space-y-4">
          {data.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="flex items-center mt-1 text-gray-500 shrink-0">
                <span className="text-xs font-bold">{'>>'}</span>
              </div>
              <div>
                <span className="font-bold text-gray-800 text-sm block">{item.label} :</span>
                <span className="text-gray-600 text-sm break-words">{item.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;