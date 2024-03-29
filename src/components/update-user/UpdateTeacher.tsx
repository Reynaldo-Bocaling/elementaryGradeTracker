import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  SelectItem,
  Select,
} from "@nextui-org/react";
import { gradeLevel } from "../../services/DummyData";

type teacherType = {
  id: number;
  name: string;
  contact: string;
  email: string;
  rank: number;
};

export default function UpdateTeacher({
  isOpen,
  onCLose,
  data,
}: {
  isOpen: boolean;
  onCLose: () => void;
  data: teacherType;
}) {
  const [selectData, setSelectData] = useState<teacherType>(data);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onCLose} className="max-w-[500px]">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-lg">
                Update student
              </ModalHeader>
              <ModalBody>
                <form className="flexColStart gap-2">
                  <Input
                    type="text"
                    size="sm"
                    label="Student Name"
                    value={selectData?.name}
                  />

                  <Input
                    type="text"
                    size="sm"
                    label="Parent Name"
                    value={selectData?.contact}
                  />
                  <Input
                    type="text"
                    size="sm"
                    label="Parent Email"
                    value={selectData?.email}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
