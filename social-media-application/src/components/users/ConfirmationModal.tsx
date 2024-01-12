import { useDeleteUser } from "../../api/users/useDeleteUser"
import { Modal } from "../Modal"
import "./ConfirmationModal.css"

type ConfirmationModalProps = {
  modalStatus: React.Dispatch<React.SetStateAction<boolean>>
  userId: number
}

export function ConfirmationModal({
  modalStatus,
  userId,
}: ConfirmationModalProps) {
  const { mutateAsync } = useDeleteUser()

  function handleClick() {
    mutateAsync(userId, {
      onSuccess: () => alert("User deleted successfully"),
    })
    console.log(userId)
    modalStatus(false)
  }

  return (
    <Modal>
      <div className="confirm-modal">
        <button
          className="close-confirmation"
          onClick={() => modalStatus(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="confirm-title">
          <p className="delete-title">Delete user?</p>
          <span>
            Are you sure want to delete user
            <span className="users-name"> "" </span>? You can't undo this
            action.
          </span>
        </div>
        <div className="warning-message">
          <i className="warning-icon fa-solid fa-triangle-exclamation"></i>
          <p className="warning-title">Warning</p>
          <p className="warning-hint">
            By confirming the user will be deleted permenently.
          </p>
        </div>
        <div className="confirm-buttons">
          <button
            className="cancel confirm-btn"
            onClick={() => modalStatus(false)}
          >
            Cancel
          </button>
          <button className="confirm-delete confirm-btn" onClick={handleClick}>
            Delete user <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </Modal>
  )
}
// 50
