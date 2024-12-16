import { toast } from 'react-hot-toast';

export interface CropAction {
  type: 'water' | 'fertilize' | 'harvest';
  cropId: string;
  timestamp: Date;
}

export class CropService {
  private static actions: CropAction[] = [];

  static async performAction(action: CropAction): Promise<boolean> {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.actions.push(action);
      
      // Return success
      return true;
    } catch (error) {
      console.error('Error performing crop action:', error);
      return false;
    }
  }

  static getLastAction(cropId: string, type: 'water' | 'fertilize' | 'harvest'): Date | null {
    const actions = this.actions
      .filter(a => a.cropId === cropId && a.type === type)
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    
    return actions.length > 0 ? actions[0].timestamp : null;
  }
}