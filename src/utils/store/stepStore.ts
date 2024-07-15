import { create } from 'zustand';

type StepStore = {
  currentStepId?: string;
  currentTripId?: string;
  addStepBefore: boolean;
  addStepAfter: boolean;
  currentStepName?: string;

  addStepModalOpened: boolean;
  deleteModalOpened: boolean;
  CloseAddStepModal: () => void;
  AddStepBefore: ({
    stepId,
    tripId,
  }: {
    stepId: string;
    tripId: string;
  }) => void;
  AddStepAfter: ({
    stepId,
    tripId,
  }: {
    stepId: string;
    tripId: string;
  }) => void;

  editSepModalOpened: boolean;
  OpenEditStepModal: (currentStepId: string) => void;
  CloseEditStepModal: () => void;

  newStepName: string;
  SetNewStepName: (value: string) => void;

  OpenDeleteModal: ({
    tripId,
    stepId,
    stepName,
  }: {
    tripId: string;
    stepId: string;
    stepName: string;
  }) => void;
  CloseDeleteModal: () => void;

  Clear: () => void;
};

export const useStepStore = create<StepStore>()((set) => ({
  addStepBefore: false,
  addStepAfter: false,

  addStepModalOpened: false,
  CloseAddStepModal() {
    set(() => ({
      addStepBefore: false,
      addStepAfter: false,
      currentStepId: undefined,
      currentTripId: undefined,
      addStepModalOpened: false,
      newStepName: 'New Step',
    }));
  },
  AddStepBefore({ stepId, tripId }) {
    set(() => ({
      currentStepId: stepId,
      currentTripId: tripId,
      addStepBefore: true,
      addStepModalOpened: true,
    }));
  },
  AddStepAfter({ stepId, tripId }) {
    set(() => ({
      currentStepId: stepId,
      currentTripId: tripId,
      addStepAfter: true,
      addStepModalOpened: true,
    }));
  },

  editSepModalOpened: false,
  OpenEditStepModal(currentStepId) {
    set(() => ({
      currentStepId,
      editSepModalOpened: true,
    }));
  },
  CloseEditStepModal() {
    set(() => ({
      currentStepId: undefined,
      editSepModalOpened: false,
    }));
  },

  deleteModalOpened: false,
  OpenDeleteModal({ tripId, stepId, stepName }) {
    set(() => ({
      currentTripId: tripId,
      currentStepId: stepId,
      currentStepName: stepName,
      deleteModalOpened: true,
    }));
  },

  CloseDeleteModal() {
    set(() => ({
      currentStepId: undefined,
      currentStepName: undefined,
      deleteModalOpened: false,
    }));
  },

  newStepName: 'New Step',
  SetNewStepName(value: string) {
    set(() => ({
      newStepName: value !== '' ? value : 'New Step',
    }));
  },

  Clear() {
    set(() => ({
      currentStepId: undefined,
      currentStepName: undefined,

      addStepModalOpened: false,
      editSepModalOpened: false,
    }));
  },
}));
