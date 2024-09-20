import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import styles from "./AddMatchModal.module.scss";
Modal.setAppElement("#root");

const AddMatchModal = ({ isOpen, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    onSubmit(data);
    onClose(); // Close modal after submit
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      closeTimeoutMS={200} // Optional: add a nice transition
    >
      <span className={styles.closeBtn} onClick={onClose}>
        X
      </span>

      <h1>Add Match</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className={styles.modalContainer}>
          <div>
            <span className={styles.formTitle}>Home</span>
            <div className={styles.inputsContainer}>
              <div>
                {" "}
                <input
                  step={0.01}
                  type="text"
                  placeholder="Team Name"
                  {...register("homeTeamName", {
                    required: "Home team name is required",
                  })}
                />
                {errors.homeTeamName && <p>{errors.homeTeamName.message}</p>}
              </div>
              <div>
                <input
                  step={0.01}
                  type="number"
                  placeholder="Odd"
                  {...register("homeTeamOdd", {
                    required: "Home team odd is required",
                  })}
                />
                {errors.homeTeamOdd && <p>{errors.homeTeamOdd.message}</p>}
              </div>
            </div>
          </div>
          <div>
            <span className={styles.formTitle}>Draw</span>
            <div className={styles.inputsContainer}>
              <div>
                <input
                  step={0.01}
                  type="number"
                  placeholder="Odd"
                  {...register("drawOdd", { required: "Draw odd is required" })}
                />
                {errors.drawOdd && <p>{errors.drawOdd.message}</p>}
              </div>
            </div>
          </div>
          <div>
            <span className={styles.formTitle}>Away</span>
            <div className={styles.inputsContainer}>
              <div>
                <input
                  type="text"
                  placeholder="Team Name"
                  {...register("awayTeamName", {
                    required: "Away team name is required",
                  })}
                />
                {errors.awayTeamName && <p>{errors.awayTeamName.message}</p>}
              </div>

              <div>
                <input
                  step={0.01}
                  type="number"
                  placeholder="Odd"
                  {...register("awayTeamOdd", {
                    required: "Away team odd is required",
                  })}
                />
                {errors.awayTeamOdd && <p>{errors.awayTeamOdd.message}</p>}
              </div>
            </div>
          </div>

          <div>
            <span>Date</span>
            <div className={styles.inputsContainer}>
              <div>
                <input
                  type="date"
                  {...register("matchDate", {
                    required: "Match date is required",
                  })}
                />
                {errors.matchDate && <p>{errors.matchDate.message}</p>}
              </div>
              <div>
                <input
                  type="time"
                  {...register("matchTime", {
                    required: "Match time is required",
                  })}
                />
                {errors.matchTime && <p>{errors.matchTime.message}</p>}
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddMatchModal;
