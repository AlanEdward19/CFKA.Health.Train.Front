export default interface Card 
{
    title: string;
    children?: Card[] | null;
    series?: number;
    repetitions?: number;
    observations?: string;
  };