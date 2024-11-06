import { Buyer } from './buyer';

export interface Message {
  name: string;
  parentTopicID: string;
  referenceType: string;
  referenceID: string;
  buyer: Buyer;
}
