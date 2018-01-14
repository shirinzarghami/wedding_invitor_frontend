export class Guest {

  constructor(
    public participate: boolean,
    public numberOfAdults: number,
    public numberOfKids: number,
    public addressCity: string,
    public addresStreet: string,
    public addressNumber: string,
    public addressPostCode: string,
    public phoneNumber: string,
    public participateDutchCeremony: boolean,
    public participateIranianCeremony: boolean,
    public participateParty: boolean,
    public remarks: string,
  ) {  }

}
