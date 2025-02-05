import { useState, useEffect } from 'react';
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
  const [pageWidth, setPageWidth] = useState(0);
  const { isAvailable, isChecking } = usePDFAvailability(PDF_URL);

  useEffect(() => {
    const updatePageWidth = () => {
      const containerWidth = window.innerWidth;
      let width;
      
      if (containerWidth <= 640) { // Mobile
        width = containerWidth - 48; // 24px padding on each side
      } else if (containerWidth <= 1024) { // Tablet
        width = Math.min(containerWidth - 96, 800);
      } else { // Desktop
        width = Math.min(containerWidth - 128, 1000);
      }
      
      setPageWidth(width);
    };

    updatePageWidth();
    window.addEventListener('resize', updatePageWidth);
    return () => window.removeEventListener('resize', updatePageWidth);
  }, []);

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
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-emerald-400" />
          <div className="absolute inset-0 animate-ping opacity-50">
            <Loader2 className="w-12 h-12 text-emerald-400" />
          </div>
        </div>
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
          <div className="flex items-center justify-center h-[calc(100vh-200px)]">
            <div className="relative">
              <Loader2 className="w-12 h-12 animate-spin text-emerald-400" />
              <div className="absolute inset-0 animate-ping opacity-50">
                <Loader2 className="w-12 h-12 text-emerald-400" />
              </div>
            </div>
          </div>
        }
        className="max-w-full"
      >
        <div className="transform hover:scale-105 transition-transform duration-300">
          <Page
            pageNumber={pageNumber}
            width={pageWidth}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="shadow-2xl rounded-lg overflow-hidden ring-1 ring-emerald-400/20"
            loading={
              <div className="flex items-center justify-center h-[600px]">
                <div className="relative">
                  <Loader2 className="w-12 h-12 animate-spin text-emerald-400" />
                  <div className="absolute inset-0 animate-ping opacity-50">
                    <Loader2 className="w-12 h-12 text-emerald-400" />
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </Document>
      {numPages && numPages > 1 && (
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
            className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-lg disabled:opacity-50 hover:from-emerald-500 hover:to-emerald-600 transition-all transform hover:scale-105 active:scale-95 disabled:hover:scale-100"
          >
            Previous
          </button>
          <p className="text-gray-300">
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
            disabled={pageNumber >= numPages}
            className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-lg disabled:opacity-50 hover:from-emerald-500 hover:to-emerald-600 transition-all transform hover:scale-105 active:scale-95 disabled:hover:scale-100"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}