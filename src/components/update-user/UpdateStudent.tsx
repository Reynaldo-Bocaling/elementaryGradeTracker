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

export default function UpdateStudent({
  isOpen,
  onCLose,
  data,
}: {
  isOpen: boolean;
  onCLose: () => void;
  data: any;
}) {
  const [selectData, setSelectData] = useState<any>(data);
  console.log(selectData);

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
                  <div className="flexCenter gap-2 w-full">
                    <Input
                      type="text"
                      size="sm"
                      label="Firstname"
                      value={selectData?.firstname}
                    />
                    <Input
                      type="text"
                      size="sm"
                      label="Lastname"
                      value={selectData?.lastname}
                    />
                  </div>

                  <Select
                    size="sm"
                    label="Select Course"
                    value={selectData?.course}
                  >
                    {section.map((item) => (
                      <SelectItem key={item.id} value={item.section}>
                        {item.section}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select size="sm" label="Select Year">
                    {section.map((item) => (
                      <SelectItem key={item.id} value={item.section}>
                        {item.section}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    size="sm"
                    label="Select Section"
                    className="max-w-full"
                    value={selectData?.section}
                  >
                    {section.map((item) => (
                      <SelectItem key={item.id} value={item.section}>
                        {item.section}
                      </SelectItem>
                    ))}
                  </Select>
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
