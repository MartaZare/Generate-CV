import { Button } from "react-bootstrap";

interface ButtonProps {
  addButton: () => void;
  deleteButton: () => void;
  setParentState: (company: string) => void;
}

export const MagicButton = (props: ButtonProps) => {
  const { deleteButton, addButton, setParentState } = props;

  return (
    <div className="d-flex justify-content-between w-50 gap-2">
      <Button onClick={deleteButton} className="btn-danger w-50">
        Delete
      </Button>
      <Button onClick={addButton} className="w-50">
        Add
      </Button>
      <Button onClick={() => setParentState("HAHA SUVEIKE")} className="w-50">
        Change company name
      </Button>
    </div>
  );
};
