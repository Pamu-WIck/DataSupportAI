import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample data for the chart
const demoData = [
  { subject: "Biology", completionCount: 14 },
  { subject: "Chemistry", completionCount: 8 },
  { subject: "Physics", completionCount: 12 },
  { subject: "Combined Science", completionCount: 6 },
];

type CompletionData = {
  subject: string;
  completionCount: number;
};

export const PaperCompletionChart = () => {
  // Fetch chart data from the API
  const { data: chartData = [], isLoading } = useQuery<CompletionData[]>({
    queryKey: ['/api/paper-completions/stats'],
  });

  // Use actual data if available, otherwise use demo data
  const displayData = chartData.length > 0 ? chartData : demoData;

  // Custom colors for the bars
  const getBarColor = (subject: string) => {
    switch (subject.toLowerCase()) {
      case "biology":
        return "#2dd4bf"; // teal-400
      case "chemistry":
        return "#c084fc"; // purple-400
      case "physics":
        return "#fb923c"; // orange-400
      case "combined science":
        return "#4ade80"; // green-400
      default:
        return "#60a5fa"; // blue-400
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={displayData}
          margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="subject" 
            tick={{ fontSize: 12 }} 
            interval={0}
          />
          <YAxis 
            allowDecimals={false}
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            formatter={(value, name) => [value, "Papers Completed"]}
            contentStyle={{ backgroundColor: "#ffffff", borderRadius: "6px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
          />
          <Legend />
          <Bar 
            dataKey="completionCount" 
            name="Papers Completed" 
            fill="#2dd4bf"
            radius={[4, 4, 0, 0]}
            fillOpacity={0.8}
            isAnimationActive={true}
          >
            {displayData.map((entry, index) => (
              <rect 
                key={`rect-${index}`} 
                fill={getBarColor(entry.subject)} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};