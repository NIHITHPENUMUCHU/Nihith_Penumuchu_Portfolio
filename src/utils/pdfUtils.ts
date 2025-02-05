import { useState, useEffect } from 'react';

export async function checkPDFExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking PDF existence:', error);
    return false;
  }
}

export function usePDFAvailability(pdfUrl: string) {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function checkAvailability() {
      const exists = await checkPDFExists(pdfUrl);
      setIsAvailable(exists);
      setIsChecking(false);
    }
    checkAvailability();
  }, [pdfUrl]);

  return { isAvailable, isChecking };
}