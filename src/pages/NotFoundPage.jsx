import React from 'react';
import { Link } from 'react-router-dom';
import PatternBg from '../art/PatternBg';

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-[80vh] bg-[#0B1520] text-white flex flex-col items-center justify-center p-6 text-center relative font-['Poppins']">
      <PatternBg variant="dark" fadeMask />

      <div className="max-w-md space-y-4 relative z-10">
        <span className="text-6xl font-black text-[#FDB913] block font-mono">
          404
        </span>
        <h1 className="text-2xl font-bold uppercase tracking-wider text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-[#9FB0C3]">
          The camp directory page or portal address you navigated to does not exist.
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F28A2E] text-[#0B1520] font-bold text-xs uppercase tracking-wider rounded-full hover:brightness-110 transition-all"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
