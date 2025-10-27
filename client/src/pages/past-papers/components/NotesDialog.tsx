import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles, Download } from "lucide-react";

interface NotesDialogProps {
  selectedPaper: any | null;
  isGeneratingNotes: boolean;
  generatedNotes: string;
  onOpenChange: (open: boolean) => void;
}

/**
 * NotesDialog Component
 * Displays generated study notes for a selected past paper
 */
export function NotesDialog({
  selectedPaper,
  isGeneratingNotes,
  generatedNotes,
  onOpenChange
}: NotesDialogProps) {
  return (
      <Dialog open={!!selectedPaper} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {isGeneratingNotes ? (
                <div className="flex items-center gap-2">
                  <span>Generating Notes</span>
                  <svg className="animate-spin w-5 h-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-teal-500" />
                  <span>Study Notes: {selectedPaper?.examBoard} {selectedPaper?.subject} {selectedPaper?.paperNumber}</span>
                </div>
              )}
            </DialogTitle>
            <DialogDescription>
              {isGeneratingNotes 
                ? "Analyzing past paper content and generating comprehensive notes..."
                : `${selectedPaper?.year} ${selectedPaper?.season} | ${selectedPaper?.tier} Tier`}
            </DialogDescription>
          </DialogHeader>
          
          {isGeneratingNotes ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-teal-500 animate-pulse" />
                </div>
                <div className="absolute inset-0 border-t-4 border-teal-500 rounded-full animate-spin"></div>
              </div>
              <p className="mt-6 text-slate-600">Identifying key topics and exam patterns...</p>
            </div>
          ) : (
            <div className="mt-4">
              <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                {generatedNotes}
              </div>
              
              <DialogFooter className="mt-6 gap-2 flex-row flex-wrap sm:justify-end justify-center">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-1"
                  onClick={() => {
                    const blob = new Blob([generatedNotes], { type: "text/markdown" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `${selectedPaper?.examBoard}-${selectedPaper?.subject}-${selectedPaper?.paperNumber}-${selectedPaper?.year}-notes.md`;
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download as Markdown
                </Button>
                
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedNotes);
                    // Could add toast notification here
                  }}
                >
                  Copy to Clipboard
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
}
