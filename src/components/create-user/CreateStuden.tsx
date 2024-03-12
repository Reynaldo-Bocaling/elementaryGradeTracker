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

export default function CreateStudent({
  isOpen,
  onCLose,
}: {
  isOpen: boolean;
  onCLose: () => void;
}) {
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
                  <Input type="text" size="sm" label="Student Name" />
                  <Input type="text" size="sm" label="Parent Name" />
                  <Input type="text" size="sm" label="Parent Email" />

                  <Select size="sm" label="Select Grade level">
                    {gradeLevel.map((item) => (
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
