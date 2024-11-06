export class CreateMessageDto {
  name: string;
  parentTopicID = null;
  referenceType = 'BuyerID';
  referenceID: number;

  constructor(name: string, referenceID: number) {
    this.name = name;
    this.referenceID = referenceID;
  }
}
