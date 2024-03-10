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
import { section } from "../../services/DummyData";

export default function UpdateGrades({
  isOpen,
  onCLose,
  data,
}: {
  isOpen: boolean;
  onCLose: () => void;
  data: any[];
}) {
  const [selectData, setSelectData] = useState<any[]>(data);
  console.log(selectData);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onCLose} className="max-w-[600px]">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-lg">
                Update Grades
              </ModalHeader>
              <ModalBody>
                <form className="flexColStart gap-2">
                  <div className="grid grid-cols-2 gap-2 w-full">
                    {data?.map((item) => (
                      <Input
                        key={item.id}
                        type="text"
                        size="sm"
                        label={item.subject}
                        value={item.grade}
                      />
                    ))}
                  </div>
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
