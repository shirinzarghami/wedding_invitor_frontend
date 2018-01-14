export class Guest {

  constructor(
    public name: string,
    public participate: boolean,
    public numberOfAdults: number,
    public numberOfKids: number,
    public addressCity: string,
    public addressStreet: string,
    public addressNumber: string,
    public addressPostalCode: string,
    public phoneNumber: string,
    public participateDutchCeremony: boolean,
    public participateIranianCeremony: boolean,
    public participateParty: boolean,
    public remarks: string,
  ) {  }

}
