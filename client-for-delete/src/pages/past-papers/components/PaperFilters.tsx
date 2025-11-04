interface PaperFiltersProps {
  yearFilter: string;
  seasonFilter: string;
  onYearFilterChange: (year: string) => void;
  onSeasonFilterChange: (season: string) => void;
  onClearFilters: () => void;
}

/**
 * PaperFilters component
 * Provides filtering controls for past papers by year and season
 */
export const PaperFilters = ({
  yearFilter,
  seasonFilter,
  onYearFilterChange,
  onSeasonFilterChange,
  onClearFilters,
}: PaperFiltersProps) => {
  const hasActiveFilters = yearFilter !== 'all' || seasonFilter !== 'all';

  return (
    <div className="flex flex-wrap gap-3 mb-6 items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-slate-700">Filter by Year:</span>
        <select
          className="px-3 py-1.5 border border-slate-300 rounded-md text-sm"
          value={yearFilter}
          onChange={(e) => onYearFilterChange(e.target.value)}
        >
          <option value="all">All Years</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-slate-700">Filter by Season:</span>
        <select
          className="px-3 py-1.5 border border-slate-300 rounded-md text-sm"
          value={seasonFilter}
          onChange={(e) => onSeasonFilterChange(e.target.value)}
        >
          <option value="all">All Seasons</option>
          <option value="Summer">Summer</option>
          <option value="January">January</option>
          <option value="Autumn">Autumn</option>
          <option value="Spring">Spring</option>
        </select>
      </div>

      {/* Clear Filters Button - only show if filters are active */}
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="px-3 py-1.5 text-sm text-teal-600 hover:text-teal-700 font-medium"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};
