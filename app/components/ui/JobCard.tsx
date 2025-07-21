import React from 'react';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface JobCardProps {
  title: string;
  company: string;
  completedRounds: number;
  totalRounds: number;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  completedRounds,
  totalRounds,
}) => {
  const progress = Math.round((completedRounds / totalRounds) * 100);
  const isComplete = progress === 100;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition duration-300 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
        <div className="flex items-center space-x-1">
          {isComplete ? (
            <CheckCircle2 className="text-green-600 w-5 h-5" />
          ) : (
            <Loader2 className="text-blue-500 animate-spin w-5 h-5" />
          )}
          <span
            className={`text-xs font-semibold ${
              isComplete ? 'text-green-600' : 'text-blue-500'
            }`}
          >
            {isComplete ? 'Completed' : 'In Progress'}
          </span>
        </div>
      </div>

      <div>
        <Progress
          value={progress}
          className={`h-3 ${
            isComplete
              ? 'bg-green-100 [&>[data-slot="progress-indicator"]]:bg-green-500'
              : 'bg-blue-100 [&>[data-slot="progress-indicator"]]:bg-blue-500'
          }`}
        />
        <p className="text-xs text-gray-500 mt-1">
          Rounds: {completedRounds} / {totalRounds} ({progress}%)
        </p>
      </div>
    </div>
  );
};

export default JobCard;
