import { Download } from 'lucide-react';
import { useResumeDownload } from '../../hooks/useResumeDownload';

export function ResumeHeader() {
  const { handleDownload } = useResumeDownload();

  return (
    <div className="p-6 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">Resume</h1>
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-4 py-2 bg-emerald-400 text-gray-900 rounded-lg hover:bg-emerald-500 transition-colors"
      >
        <Download size={20} />
        Download PDF
      </button>
    </div>
  );
}