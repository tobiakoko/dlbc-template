import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

interface PastorCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
  onClick: () => void;
}

export function PastorCard({ name, title, image, description, onClick }: PastorCardProps) {
  return (
    <Card className="text-center hover:shadow-lg transition-all duration-300 border-slate-200">
      <CardContent className="p-6">
        <div 
          className="w-48 h-48 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden cursor-pointer hover:ring-4 hover:ring-blue-100 transition-all group"
          onClick={onClick}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 
          className="mb-2 cursor-pointer hover:text-blue-900 transition-colors"
          onClick={onClick}
        >
          {name}
        </h3>
        <p className="text-blue-900 mb-3">{title}</p>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">{description}</p>
        <Button
          onClick={onClick}
          variant="link"
          className="text-blue-900 p-0 h-auto"
        >
          Read Bio →
        </Button>
      </CardContent>
    </Card>
  );
}
