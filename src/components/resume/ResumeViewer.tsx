import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Loader2 } from 'lucide-react';
import { PDFErrorFallback } from './PDFErrorFallback';
import { usePDFAvailability } from '../../utils/pdfUtils';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDF_URL = '/resume.pdf';

export function ResumeViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<Error | null>(null);
  const { isAvailable, isChecking } = usePDFAvailability(PDF_URL);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error('PDF load error:', error);
    setError(error);
  }

  if (isChecking) {
    return (
      <div className="flex items-center justify-center h-[600px]">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
      </div>
    );
  }

  if (!isAvailable || error) {
    return <PDFErrorFallback />;
  }

  return (
    <div className="p-6 flex flex-col items-center">
      <Document
        file={PDF_URL}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={
          <div className="flex items-center justify-center h-[600px]">
            <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
          </div>
        }
        className="max-w-full"
      >
        <Page
          pageNumber={pageNumber}
          width={Math.min(window.innerWidth - 48, 1000)}
          renderTextLayer={true}
          renderAnnotationLayer={true}
          className="shadow-xl rounded-lg overflow-hidden"
          loading={
            <div className="flex items-center justify-center h-[600px]">
              <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
            </div>
          }
        />
      </Document>
      {numPages && (
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
          <p className="text-gray-300">
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-600 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
