import { FileWarning } from 'lucide-react';

export function PDFErrorFallback() {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] bg-gray-700 rounded-lg p-8">
      <FileWarning className="w-16 h-16 text-emerald-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Resume Not Available</h3>
      <p className="text-gray-300 text-center mb-4">
        The resume PDF file is currently unavailable. Please try again later or contact me directly.
      </p>
      <div className="flex gap-4">
        <a
          href="mailto:nihithpenumuchu@gmail.com"
          className="px-4 py-2 bg-emerald-400 text-gray-900 rounded-lg hover:bg-emerald-500 transition-colors"
        >
          Contact Me
        </a>
        <a
          href="https://www.linkedin.com/in/nihith-penumuchu-132219253/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
        >
          View LinkedIn
        </a>
      </div>
    </div>
  );
}