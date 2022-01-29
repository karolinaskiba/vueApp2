import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import StudentModel from "@/models/StudentModel";

export default {
  namespaced: true,
  state() {
    return {
      students: <StudentModel[]>[
        {
          firstName: "Karolina",
          lastName: "Skiba",
          schoolType: 1,
          schoolName: "v",
          grade: 1,
          book: "Pazdro",
          extension: true,
          communicator: 1,
          id: "1",
          phoneNumber: "570073662",
          emailAddress: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac lacinia mauris, eget facilisis enim. Maecenas non auctor purus. Quisque accumsan libero purus, sit amet molestie dui mattis vitae. Vivamus et suscipit ante. Nam eu porttitor risus, vitae placerat odio. Nullam condimentum dictum convallis. Mauris sagittis erat eget sollicitudin laoreet. Nullam porta ipsum nec mi iaculis dignissim non vel tellus. Duis egestas turpis nec pellentesque mollis. Ut et pulvinar risus, sed fermentum lorem.",
        },
        {
          firstName: "Karo",
          lastName: "Skiba",
          schoolType: 2,
          schoolName: "vi",
          grade: 1,
          book: "Oficyna",
          extension: false,
          communicator: 2,
          parentName: "Jolanta Skiba",
          parentPhoneNumber: "570073662",
          phoneNumber: "123456789",
          emailAddress: "karolina.skiba@gmail.com",
          description: "lorem",
        },
        {
          firstName: "Karo",
          lastName: "Skiba",
          schoolType: 2,
          schoolName: "vi",
          grade: 1,
          book: "Oficyna",
          extension: false,
          communicator: 2,
          id: "3",
          parentName: "Jolanta Skiba",
          parentPhoneNumber: "570073662",
          phoneNumber: "123456789",
          emailAddress: "karolina.skiba@gmail.com",
          description: "lorem",
        },
        {
          firstName: "Karo",
          lastName: "Skiba",
          schoolType: 3,
          schoolName: "vi",
          grade: 1,
          book: "Oficyna",
          extension: false,
          communicator: 2,
          id: "3",
          parentName: "Jolanta Skiba",
          parentPhoneNumber: "570073662",
          phoneNumber: "123456789",
          emailAddress: "karolina.skiba@gmail.com",
          description: "lorem",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
