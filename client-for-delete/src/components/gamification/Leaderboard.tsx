import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LucideSearch, LucideFilter, LucideChevronUp, LucideChevronDown } from "lucide-react";

type Student = {
  id: number;
  name: string;
  totalPoints: number;
  streak: number;
  avatarUrl?: string;
};

export const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"points" | "streak">("points");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  // Fetch leaderboard data
  const { data: students = [], isLoading } = useQuery<Student[]>({
    queryKey: ['/api/leaderboard'],
  });

  // Demo data for preview
  const demoStudents: Student[] = [
    { id: 1, name: "Alex Johnson", totalPoints: 3450, streak: 12 },
    { id: 2, name: "Samantha Lee", totalPoints: 3280, streak: 8 },
    { id: 3, name: "Daniel Williams", totalPoints: 2950, streak: 15 },
    { id: 4, name: "Emily Chen", totalPoints: 2840, streak: 6 },
    { id: 5, name: "James Smith", totalPoints: 2750, streak: 4 },
    { id: 6, name: "Olivia Martinez", totalPoints: 2520, streak: 9 },
    { id: 7, name: "Liam Brown", totalPoints: 2180, streak: 7 },
    { id: 8, name: "Sophia Garcia", totalPoints: 1990, streak: 3 },
    { id: 9, name: "Noah Wilson", totalPoints: 1870, streak: 5 },
    { id: 10, name: "Isabella Taylor", totalPoints: 1650, streak: 2 },
  ];

  // Use actual data if available, otherwise use demo data
  const displayStudents = students.length > 0 ? students : demoStudents;
  
  // Filter by search query
  const filteredStudents = displayStudents.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Sort students
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    const sortValue = sortBy === "points" 
      ? a.totalPoints - b.totalPoints
      : a.streak - b.streak;
    
    return sortDirection === "asc" ? sortValue : -sortValue;
  });

  const handleSort = (column: "points" | "streak") => {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDirection("desc");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="relative">
        <LucideSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          className="pl-10 pr-4"
          placeholder="Search students..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Leaderboard table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12 text-center">Rank</TableHead>
              <TableHead>Student</TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("points")}>
                <div className="flex items-center space-x-1">
                  <span>Points</span>
                  {sortBy === "points" && (
                    sortDirection === "asc" 
                      ? <LucideChevronUp className="h-4 w-4" />
                      : <LucideChevronDown className="h-4 w-4" />
                  )}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("streak")}>
                <div className="flex items-center space-x-1">
                  <span>Streak</span>
                  {sortBy === "streak" && (
                    sortDirection === "asc" 
                      ? <LucideChevronUp className="h-4 w-4" />
                      : <LucideChevronDown className="h-4 w-4" />
                  )}
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedStudents.map((student, index) => (
              <TableRow key={student.id} className={index < 3 ? "bg-yellow-50" : ""}>
                <TableCell className="text-center font-medium">
                  {index < 3 ? (
                    <div className={`
                      inline-flex justify-center items-center w-8 h-8 rounded-full 
                      ${index === 0 ? 'bg-yellow-100 text-yellow-700' : 
                        index === 1 ? 'bg-slate-100 text-slate-700' : 
                        'bg-amber-100 text-amber-700'}
                    `}>
                      {index + 1}
                    </div>
                  ) : (
                    index + 1
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={student.avatarUrl} />
                      <AvatarFallback className="bg-teal-100 text-teal-700">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{student.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
                    {student.totalPoints.toLocaleString()}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {student.streak} days
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {sortedStudents.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-slate-400">
                  No students found for "{searchQuery}"
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};