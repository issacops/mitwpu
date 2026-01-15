import React from 'react';
import { QrCode } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#4a00e0] text-white p-4 shadow-md w-full">
      <div className="container mx-auto flex items-center gap-3">
        <QrCode className="w-6 h-6 text-white" />
        <h1 className="text-xl font-medium tracking-wide">SeQR Blockchain Verification Page</h1>
      </div>
    </header>
  );
};

export default Header;