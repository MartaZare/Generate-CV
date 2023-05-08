import { Button } from "react-bootstrap";

interface ButtonProps {
  addButton: () => void;
  deleteButton: () => void;
}

export const MagicButton = (props: ButtonProps) => {
  const { deleteButton, addButton } = props;

  return (
    <div className="d-flex justify-content-between w-50 gap-2">
      <Button onClick={deleteButton} className="btn-danger w-50">
        Delete
      </Button>
      <Button onClick={addButton} className="w-50">
        Add
      </Button>
    </div>
  );
};
