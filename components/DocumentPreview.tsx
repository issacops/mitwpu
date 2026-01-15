import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const DocumentPreview: React.FC = () => {
   return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col">
         <div className="bg-sky-100 px-4 py-3 flex items-center gap-2 border-b border-gray-100">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <h2 className="font-semibold text-lg text-sky-700">Verified Document</h2>
         </div>

         <div className="p-6 bg-gray-50 flex-grow flex justify-center items-center">
            <div className="relative w-full max-w-2xl bg-white shadow-lg border border-gray-200">
               <img
                  src="./certificate.jpg"
                  alt="Student Certificate"
                  className="w-full h-auto"
               />
            </div>
         </div>
      </div>
   );
};

export default DocumentPreview;