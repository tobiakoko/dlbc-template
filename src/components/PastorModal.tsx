import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

interface PastorModalProps {
  isOpen: boolean;
  onClose: () => void;
  pastor: {
    name: string;
    title: string;
    image: string;
    bio: string;
  };
}

export function PastorModal({ isOpen, onClose, pastor }: PastorModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{pastor.name}</DialogTitle>
          <DialogDescription>{pastor.title}</DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[calc(90vh-120px)] pr-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={pastor.image}
              alt={pastor.name}
              className="w-48 h-48 rounded-full object-cover flex-shrink-0 mx-auto md:mx-0 ring-4 ring-blue-100"
            />
            <div className="flex-1">
              <div className="text-slate-600 leading-relaxed space-y-4">
                {pastor.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}