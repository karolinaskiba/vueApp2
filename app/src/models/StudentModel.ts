import { CommunicatorTypeEnum } from "@/enums/ComunicatorTypeEnum";
import { SchoolTypeEnum } from "@/enums/SchoolTypeEnum";

export default class StudentModel {
  firstName: string;
  lastName: string;
  schoolType: SchoolTypeEnum;
  schoolName: string;
  grade: number;
  book: string;
  extension: boolean;
  communicator: CommunicatorTypeEnum;
  id: string;
  phoneNumber: string | null;
  emailAddress: string | null;
  parentName: string;
  parentPhoneNumber: string | null;
  description: string;

  constructor(values: any = {}) {
    this.firstName = values.firstName ?? "";
    this.lastName = values.lastName ?? "";
    this.schoolType = values.schoolType ?? 1;
    this.schoolName = values.school ?? "";
    this.grade = values.grade ?? 0;
    this.book = values.book ?? "";
    this.extension = values.extension ?? false;
    this.communicator = values.communicator ?? 1;
    this.id = values.id ?? "";
    this.phoneNumber = values.phoneNumber ?? null;
    this.emailAddress = values.emailAddress ?? null;
    this.parentName = values.parentName ?? "";
    this.parentPhoneNumber = values.parentPhoneNumber ?? null;
    this.description = values.description ?? "";
  }
}
