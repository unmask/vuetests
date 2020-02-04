export declare namespace SearchResponseTypes {
  interface Attributes {
    additionalProp1: string
    additionalProp2: string
    additionalProp3: string
  }

  interface Address {
    firstName: string;
    lastName: string;
    line1: string;
    line2: string;
    city: string;
    state: string;
    postCode: string;
    country: string;
    isDefault: boolean;
  }

  interface Date {
    year: number;
    month: number;
    day: number;
  }

  
  interface Time {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  }

  interface DateTime {
    date: Date;
    time: Time;
  }

  interface Pop {
    id: string;
    ifiID: number;
    label: string;
    entityID: string;
    entityType: string;
    address: Address;
    status: string;
    isDefault: boolean;
    createdAt: DateTime;
    modifiedAt: DateTime;
    headers: object;
  } 

  interface Vector {
    id: string;
    accountHolderID: string;
    ifiID: number;
    status: string;
    type: string;
    value: string;
    createdAt: string;
    attributes: Attributes;
    headers: Headers;
  }

  interface RootResponse {
    requestID: string;
    id: string;
    ifiID: number;
    accountHolderProviderID: string;
    vectors: Vector[];
    type: string;
    status: string;
    firstName: string;
    middleName: string;
    lastName: string;
    profilePicURL: string;
    gender: string;
    pops: Pop[];
    tags: any[];
    attributes: object;
    createdAt: DateTime;
    headers: object;
  }

  interface ResponseType {
    data: RootResponse;
  }
} 