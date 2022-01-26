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
  }
}
