import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, PartyPopper } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const paperCompletionSchema = z.object({
  studentId: z.number().min(1, "Student ID is required"),
  examBoard: z.string().min(1, "Exam board is required"),
  subject: z.string().min(1, "Subject is required"),
  paperIdentifier: z.string().min(1, "Paper identifier is required"),
  score: z.number().min(0, "Score must be at least 0").optional(),
  maxScore: z.number().min(1, "Maximum score must be at least 1").optional(),
});

type PaperCompletionFormValues = z.infer<typeof paperCompletionSchema>;

type PaperCompletionFormProps = {
  studentId: number;
  examBoard: string;
  subject: string;
  paperIdentifier: string;
  paper: any;
  trigger?: React.ReactNode;
  onComplete?: () => void;
};

export const PaperCompletionForm = ({
  studentId,
  examBoard,
  subject,
  paperIdentifier,
  paper,
  trigger,
  onComplete
}: PaperCompletionFormProps) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const form = useForm<PaperCompletionFormValues>({
    resolver: zodResolver(paperCompletionSchema),
    defaultValues: {
      studentId,
      examBoard,
      subject,
      paperIdentifier,
      score: undefined,
      maxScore: undefined,
    },
  });

  const onSubmit = async (data: PaperCompletionFormValues) => {
    try {
      setSubmitting(true);

      const response = await fetch('/api/paper-completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setResult(result.data);
        if (onComplete) onComplete();
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to record paper completion",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to the server",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    form.reset();
    setResult(null);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      setOpen(isOpen);
      if (!isOpen) {
        resetForm();
      }
    }}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="sm" variant="outline" className="gap-1">
            <CheckCircle className="w-4 h-4 mr-1" /> Mark as Complete
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {!result ? (
          <>
            <DialogHeader>
              <DialogTitle>Record Paper Completion</DialogTitle>
              <DialogDescription>
                Mark this paper as complete and track your progress
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Paper Details</h3>
                  <p className="text-sm text-gray-500">
                    {paper.examBoard} {paper.subject} {paper.paperNumber} ({paper.year} {paper.season})
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="score"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Score</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Optional"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="maxScore"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Maximum Score</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Optional"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" disabled={submitting} className="w-full">
                    {submitting ? (
                      <span className="flex items-center">
                        <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                        Submitting...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-6 px-2 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <PartyPopper className="h-8 w-8 text-green-600" />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Well Done!</h2>
              <p className="text-gray-600 mb-4">
                You've earned {result.pointsEarned} points for completing this paper!
              </p>

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 text-yellow-800 text-sm">
                <Award className="h-4 w-4 mr-2 text-yellow-600" />
                New total: {result.student.totalPoints} points
              </div>

              {result.student.streak > 1 && (
                <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-800 text-sm">
                  <Award className="h-4 w-4 mr-2 text-red-600" />
                  {result.student.streak} day streak!
                </div>
              )}
            </div>

            <Button className="mt-4" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaperCompletionForm;